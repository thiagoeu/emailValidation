import { Router } from "express";
import { enviarEmailController } from "../controllers/email.Controller.js";

const emailRouter = Router();

emailRouter.post(
  "/send-email",
  /* #swagger.tags = ['Usuario']
    #paths['/email/send-email']
  
  */
  enviarEmailController
);

export default emailRouter;
