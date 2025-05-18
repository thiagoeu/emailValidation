import nodeMailerConfig from "../config/nodeMailerConfig.js";
import generateOtp from "../utils/generateOTP.js";

import User from "../models/user.model.js";
import sendOtpEmail from "../services/sendOtpEmail.service.js";
import UserModel from "../models/user.model.js";

export async function enviarEmailController(req, res) {
  try {
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({
        message: "Nome e email obrigatórios",
        error: true,
        success: false,
      });
    }

    // Configura o transporte e envia o e-mail
    await nodeMailerConfig(email, name);

    const user = await UserModel.create({ email, name });
    console.log(user);

    return res.status(200).json({
      message: "Email enviado com sucesso",
      error: false,
      success: true,
    });
  } catch (err) {
    console.error("Erro ao enviar email:", err);
    return res.status(500).json({
      message: "Erro interno ao enviar email" || err.message,
      error: true,
      success: false,
    });
  }
}

export async function sendOtpEmailController(req, res) {
  try {
    const { name, email } = req.body;

    // Valida os campos
    if (!email || !name) {
      return res.status(400).json({
        message: "Email e nome obrigatórios",
        error: true,
        success: false,
      });
    }

    const otp = generateOtp();

    // Encontra ou cria o usuário
    const user = await User.findOneAndUpdate(
      { email: email },
      {
        $set: {
          name: name, // Atualiza o nome se necessário
          otp: otp,
          otp_expiry: new Date(Date.now() + 15 * 60 * 1000),
        },
      },
      {
        upsert: true, // Cria novo usuário se não existir
        new: true, // Retorna o usuário atualizado
      }
    );

    await sendOtpEmail(email, name, otp);

    return res.status(200).json({
      message: "Email enviado com sucesso",
      error: false,
      success: true,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Erro interno falha ao enviar otp email" || err.message,
      error: true,
      success: false,
    });
  }
}

export async function verifyEmailController(req, res) {
  try {
    const { email, otp } = req.query;
    console.log(req.query);

    // verifica os campos
    if (!email || !otp) {
      return res.status(400).json({
        message: "Email e OTP obrigatórios",
        error: true,
        success: false,
      });
    }

    // Encontra o usuário
    const user = await User.findOne({ email: email });

    // Verifica se o usuário foi encontrado
    if (!user) {
      return res.status(404).json({
        message: "Usuário não encontrado",
        error: true,
        success: false,
      });
    }

    //Verifica se o OTP esta correto
    if (user.otp !== otp) {
      return res.status(400).json({
        message: "OTP inválido",
        error: true,
        success: false,
      });
    }

    // Verifica se o OTP expirou
    if (user.otp_expiry < Date.now()) {
      return res.status(400).json({
        message: "OTP expirado",
        error: true,
        success: false,
      });
    }

    // Marca o usuário como verificado
    user.verify_email = true;
    await user.save();

    return res.send("<h2>Email verificado com sucesso!</h2>");
  } catch (err) {
    return res.status(500).json({
      message: "Erro interno ao verificar email" || err.message,
      error: true,
      success: false,
    });
  }
}
