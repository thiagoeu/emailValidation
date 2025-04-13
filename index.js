import express from "express";
import cors from "cors";

import emailRouter from "./routes/email.route.js";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/email", emailRouter);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
