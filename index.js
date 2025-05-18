import express from "express";
import cors from "cors";

import emailRouter from "./routes/email.route.js";
import connectDB from "./config/connectDB.js";

//swagger
import swaggerUi from "swagger-ui-express";
import { readFile } from "fs/promises";
const file = await readFile("./swagger_output.json", "utf-8");
const swaggerDocument = JSON.parse(file);

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

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
