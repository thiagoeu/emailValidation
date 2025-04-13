import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

export async function enviarEmailController(req, res) {
  // Configura o transporte com Gmail (modo de teste, precisa permitir apps menos seguros)
  const { nome } = req.body;

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
    to: "araujo.thiago1051@gmail.com",
    subject: "Validação de Cadastro",
    text: `olá ${nome} isso é apenas um teste de envio de e-mail com Node.js`,
  };

  // Envia
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email enviado:", info.response);

    return res.status(200).json({
      message: "Email enviado com sucesso",
    });
  } catch (err) {
    console.error("Erro ao enviar email:", err);
  }
}
