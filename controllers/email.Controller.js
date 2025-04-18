import nodeMailerConfig from "../config/nodeMailerConfig.js";

export async function enviarEmailController(req, res) {
  try {
    const { nome, email } = req.body;
    if (!nome || !email) {
      return res.status(400).json({
        message: "Nome e email obrigatórios",
        error: true,
        success: false,
      });
    }

    // Configura o transporte e envia o e-mail
    await nodeMailerConfig(email, nome);

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
