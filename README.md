# Deploy

https://emailvalidation-api-nodejs.onrender.com/api-docs

# 📧 emailValidation-API-Nodejs

Uma API RESTful desenvolvida com Node.js e Express para validação e verificação de e-mails.  
Utiliza o Nodemailer para envio de OTPs (One-Time Passwords) e MongoDB para armazenamento de dados dos usuários.

## 🚀 Funcionalidades

- Envio de OTP para verificação de e-mail.
- Validação de OTP recebido pelo usuário.
- Atualização do status de verificação do e-mail no banco de dados.
- Documentação da API com Swagger.

## 🛠️ Tecnologias Utilizadas

- Node.js
- Express
- MongoDB com Mongoose
- Nodemailer
- Swagger UI Express

## 📦 Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/thiagoeu/emailValidation-API-Nodejs.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd emailValidation-API-Nodejs
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Configure as variáveis de ambiente criando um arquivo `.env` na raiz do projeto com o seguinte conteúdo:
   ```env
   GOOGLE_ACCOUNT_USER=seu_email@gmail.com
   GOOGLE_ACCOUNT_PASSWORD=sua_senha
   MONGODB_URI=sua_string_de_conexao_mongodb
   ```

## ▶️ Executando a Aplicação

```bash
npm start
```

A aplicação estará disponível em `http://localhost:3000`.

## 📬 Endpoints

- `POST /api/email/send-otp-email`  
  Envia um OTP para o e-mail fornecido.

- `GET /api/email/verify-email?email=seu_email&otp=seu_otp`  
  Verifica o OTP e atualiza o status de verificação do e-mail.

## 📄 Documentação da API

A documentação da API está disponível em:

```
http://localhost:3000/api-docs
```

## 🤝 Contribuindo

1. Faça um fork deste repositório.
2. Crie uma branch com a sua feature: `git checkout -b minha-feature`.
3. Commit suas alterações: `git commit -m 'Minha nova feature'`.
4. Push para a branch: `git push origin minha-feature`.
5. Abra um Pull Request.

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
