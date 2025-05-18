import { Router } from "express";
import {
  enviarEmailController,
  sendOtpEmailController,
} from "../controllers/email.Controller.js";

const emailRouter = Router();

emailRouter.post(
  "/send-email",
  /* #swagger.tags = ['Usuario']
    #paths['/api/email/send-email']
  
  */
  enviarEmailController
);

emailRouter.post(
  "/send-otp-email",
  /* #swagger.tags = ['Usuario']
    #paths['/email/send-email']
  
  */
  sendOtpEmailController
);

export default emailRouter;
