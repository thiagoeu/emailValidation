const emailTemplate = ({ nome }) => {
  return `
    <p> Prezado(a) ${nome},</p>
    <p> Obrigado por se cadastrar no comercio, Estamos felizes em tê-lo(a) conosco.</p>
    `;
};

export default emailTemplate;
