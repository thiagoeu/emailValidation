import express from "express";
import cors from "cors";

import emailRouter from "./routes/email.route.js";
import connectDB from "./config/connectDB.js";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// rotas de controle de email
app.use("/api/email", emailRouter);

// conecta ao banco e depois inicia o servidor
connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
  });
});
