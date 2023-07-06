import Joi from "joi";

export const EditPostSchema = Joi.object({
    name: Joi.string().trim().required()
})
