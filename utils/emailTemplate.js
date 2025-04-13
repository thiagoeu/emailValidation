const verifyEmailTemplate = ({ name }) => {
  return `
    <p> Prezado(a) ${name},</p>
    <p> Obrigado por se cadastrar no comercio, Estamos felizes em tê-lo(a) conosco.</p>
    `;
};

export default verifyEmailTemplate;
