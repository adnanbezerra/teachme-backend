import Joi from "joi";

export const NewPostSchema = Joi.object({
    name: Joi.string().trim().required(),
    creationDate: Joi.date().required()
})