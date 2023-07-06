import { Request, Response } from "express";
import * as chapterService from "../services/ChaptersServices";
import { NewChapter } from "../types/ChapterTypes";

export async function postNewChapter(req: Request, res: Response) {
    const newChapterData: NewChapter = req.body;
    const userId = res.locals.id;

    await chapterService.postNewChapter(newChapterData, userId);

    res.sendStatus(201);
}

export async function editChapter(req: Request, res: Response) {
    const newChapterData: NewChapter = req.body;
    const userId = +res.locals.id;
    const chapterId = +req.params.chapterId;

    await chapterService.editChapter(newChapterData, chapterId, userId);

    res.sendStatus(200);
}

export async function deleteChapterById(req: Request, res: Response) {
    const chapterId = +req.params.chapterId;
    const userId = +res.locals.id;

    await chapterService.deleteChapterById(chapterId, userId);

    res.sendStatus(200);
}

export async function getChaptersByPostId(req: Request, res: Response) {
    const postId = +req.params.postId;

    const chapters = await chapterService.getChaptersByPostId(postId);

    res.status(200).send(chapters);
}
