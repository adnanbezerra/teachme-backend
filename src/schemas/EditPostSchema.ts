import Joi from "joi";

export const EditPostSchema = Joi.object({
    email: Joi.string().email(),
    name: Joi.string().trim().required(),
    nickname: Joi.string().trim().required(),
    biography: Joi.string().trim().required(),
    profilePicture: Joi.string().trim().required()
})