import { Router } from "express";
import {
  enviarEmailController,
  sendOtpEmailController,
  verifyEmailController,
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
    #paths['api/email/send-email']
  
  */
  sendOtpEmailController
);

emailRouter.get("/verify-email", verifyEmailController);

export default emailRouter;
