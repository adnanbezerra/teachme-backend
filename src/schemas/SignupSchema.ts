import Joi from "joi";

export const SignupSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().trim().required(),
    confirmPassword: Joi.string().valid(Joi.ref("password")).required()
})