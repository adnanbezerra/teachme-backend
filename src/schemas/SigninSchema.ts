import Joi from "joi";

export const SigninSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().trim().required()
})
