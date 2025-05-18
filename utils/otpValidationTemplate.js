const otpValidationTemplate = ({ name, verificationLink }) => {
  return `
    <h1>Verificação de Email</h1>
    <p>Prezado(a) ${name},</p>
    <p>Clique no link abaixo para verificar seu email:</p>
    <a href="${verificationLink}">Verificar Email</a>
      `;
};

export default otpValidationTemplate;
