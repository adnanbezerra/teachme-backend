import { Router } from "express";
import { deleteUserById, getUserById, getUserMe, getUsersList, postSignin, postSignup, putUserById } from "../controllers/UserController";
import { validateSchema } from "../middlewares/ValidateSchema";
import { ValidateToken } from "../middlewares/ValidateToken";
import { EditUserSchema } from "../schemas/EditUserSchema";
import { SigninSchema } from "../schemas/SigninSchema";
import { SignupSchema } from "../schemas/SignupSchema";

export const UserRouter = Router();

UserRouter.post("/signin", validateSchema(SigninSchema), postSignin);
UserRouter.post("/signup", validateSchema(SignupSchema), postSignup);
UserRouter.get("/user/id/:id", getUserById);
UserRouter.get("/users", getUsersList);
UserRouter.put("/user/id/:id", validateSchema(EditUserSchema), ValidateToken, putUserById);
UserRouter.delete("/user/id/:id", ValidateToken, deleteUserById);
UserRouter.get("/user/me", ValidateToken, getUserMe);