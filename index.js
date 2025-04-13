const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

async function enviarEmail() {
  // Configura o transporte com Gmail (modo de teste, precisa permitir apps menos seguros)
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
    subject: "E-mail de teste com Node.js",
    text: "Este é um e-mail de teste enviado com Node.js.",
  };

  // Envia
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email enviado:", info.response);
  } catch (err) {
    console.error("Erro ao enviar email:", err);
  }
}

enviarEmail();
