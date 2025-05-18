import nodemailer from "nodemailer";
import dotenv from "dotenv";

import otpValidationTemplate from "../utils/otpValidationTemplate.js";
dotenv.config();

const sendOtpEmail = async (email, name, otp) => {
  try {
    if (!email || !name) {
      throw new Error("Email e nome obrigatórios");
    }

    // Configura o transporte
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GOOGLE_ACCOUNT_USER,
        pass: process.env.GOOGLE_ACCOUNT_PASSWORD,
      },
    });

    const verificationLink = `http://localhost:3000/api/email/verify-email?email=${email}&otp=${otp}`;

    // Define os dados do e-mail
    const mailOptions = {
      from: process.env.GOOGLE_ACCOUNT_USER,
      to: email,
      subject: "Ativação de Cadastro",
      html: otpValidationTemplate({ name, verificationLink }),
    };

    const info = await transporter.sendMail(mailOptions);

    return console.log("Email enviado:", info.response);
  } catch (error) {
    console.error("Erro ao enviar email:", error);
    throw new Error("Erro ao enviar email");
  }
};

export default sendOtpEmail;
