import { Router } from "express";
import { deleteChapterById, editChapter, getChaptersByPostId, postNewChapter } from "../controllers/ChaptersController";
import { validateSchema } from "../middlewares/ValidateSchema";
import { ValidateToken } from "../middlewares/ValidateToken";
import { ChapterDataSchema } from "../schemas/ChapterDataSchema";

export const ChaptersRouter = Router();

ChaptersRouter.post("/new-chapter/:postId", validateSchema(ChapterDataSchema), ValidateToken, postNewChapter);
ChaptersRouter.put("/edit-chapter/:chapterId", validateSchema(ChapterDataSchema), ValidateToken, editChapter);
ChaptersRouter.delete("/delete-chapter/:chapterId", ValidateToken, deleteChapterById);
ChaptersRouter.get("/chapters/:postId", getChaptersByPostId);
