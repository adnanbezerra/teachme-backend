import Joi from 'joi';

export const ChapterDataSchema = Joi.object({
    title: Joi.string().trim().required(),
    content: Joi.string().trim().required(),
    lastEdit: Joi.date().required()
})