import Joi from "joi";

export const SignupSchema = Joi.object({
    email: Joi.string().email().required().label("É obrigatório fornecer um e-mail!"),
    password: Joi.string().trim().required().label("É obrigatório fornecer uma senha!"),
    name: Joi.string().trim().required().label("É obrigatório fornecer um nome de usuário!"),
    profilePicture: Joi.string().uri().label("Insira um link válido"),
})
