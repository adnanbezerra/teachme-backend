import { NewChapter } from "../types/ChapterTypes";
import * as chapterRepository from "../repositories/ChaptersRepository";
import { checkIfIsAdminOrIsHimself } from "../utils/checkAdminOrItself";
import { notFoundError, unauthorizedError } from "../utils/errorUtils";

async function postNewChapter(newChapterData: NewChapter, posterId: number) {
    await chapterRepository.postNewChapter(newChapterData, posterId);
}

async function editChapter(newChapterData: NewChapter, chapterId: number, userId: number) {
    await checkIfChapterIsYours(chapterId, userId);

    await chapterRepository.editChapter(newChapterData, chapterId);
}

async function deleteChapterById(chapterId: number, posterId: number) {
    await checkIfIsAdminOrIsHimself(chapterId, posterId);

    await chapterRepository.deleteChapterById(chapterId);
}

async function getChaptersByPostId(postId: number) {
    const chapters = await chapterRepository.getChaptersByPostId(postId);
    if(!chapters) throw notFoundError();

    return chapters;
}

// auxiliary functions

async function checkIfChapterIsYours(chapterId: number, userId: number) {
    const id = await chapterRepository.getPosterIdByChapterId(chapterId);

    if(id !== userId) throw unauthorizedError();
}

export {
    postNewChapter,
    editChapter,
    deleteChapterById,
    getChaptersByPostId
}