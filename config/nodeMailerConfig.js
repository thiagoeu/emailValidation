import nodemailer from "nodemailer";
import dotenv from "dotenv";
import emailTemplate from "../utils/emailTemplate.js";
dotenv.config();

const nodeMailerConfig = async (email, nome) => {
  try {
    if (!GOOGLE_ACCOUNT_PASSWORD || !GOOGLE_ACCOUNT_USER) {
      throw new Error("Variáveis de ambiente não configuradas");
    }

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
  } catch (error) {
    console.error("Erro ao enviar email:", error);
  }
};

export default nodeMailerConfig;
