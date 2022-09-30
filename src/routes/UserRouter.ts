import { Router } from "express";
import { deleteUserById, getUserById, getUsersList, postSignin, postSignup, putUserById } from "../controllers/UserController";
import { validateSchema } from "../middlewares/ValidateSchema";
import { ValidateToken } from "../middlewares/ValidateToken";
import { EditPostSchema } from "../schemas/EditPostSchema";
import { SigninSchema } from "../schemas/SigninSchema";
import { SignupSchema } from "../schemas/SignupSchema";

export const UserRouter = Router();

UserRouter.post("/signin", validateSchema(SigninSchema), postSignin);
UserRouter.post("/signup", validateSchema(SignupSchema), postSignup);
UserRouter.get("/user/:id", getUserById);
UserRouter.get("/users", getUsersList);
UserRouter.put("/user/:id", validateSchema(EditPostSchema), ValidateToken, putUserById);
UserRouter.delete("/user/:id", ValidateToken, deleteUserById);