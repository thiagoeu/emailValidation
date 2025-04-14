import nodemailer from "nodemailer";
import dotenv from "dotenv";
import emailTemplate from "../utils/emailTemplate.js";
dotenv.config();

const nodeMailerConfig = async (email, nome) => {
  try {
    if (!email || !nome) {
      throw new Error("Email e nome obrigatórios");
    }

    // Configura o transporte
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GOOGLE_ACCOUNT_USER,
        pass: process.env.GOOGLE_ACCOUNT_PASSWORD,
      },
    });

    // Define os dados do e-mail
    const mailOptions = {
      from: process.env.GOOGLE_ACCOUNT_USER,
      to: email,
      subject: "Validação de Cadastro",
      html: emailTemplate({ nome }),
    };

    const info = await transporter.sendMail(mailOptions);
    return console.log("Email enviado:", info.response);
  } catch (error) {
    return console.error("Erro ao enviar email:", error);
  }
};

export default nodeMailerConfig;
