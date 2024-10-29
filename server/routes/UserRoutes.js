import express from "express";
import { clerckWebhooks } from "../controllers/UserController.js";

const userRouter = express.Router();

userRouter.post('/webhooks', clerckWebhooks);

export default userRouter;