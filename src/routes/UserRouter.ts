import { Router } from "express";
import { postSignin, postSignup } from "../controllers/UserController";
import { validateSchema } from "../middlewares/ValidateSchema";
import { SigninSchema } from "../schemas/SigninSchema";
import { SignupSchema } from "../schemas/SignupSchema";

export const UserRouter = Router();

UserRouter.post("/signin", validateSchema(SigninSchema), postSignin);
UserRouter.post("/signup", validateSchema(SignupSchema), postSignup);