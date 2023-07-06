import { NewChapter } from "../types/ChapterTypes";
import { client } from "../database/prisma"
import { notFoundError } from "../utils/errorUtils";

async function postNewChapter(newChapter: NewChapter, postsId: number) {
    return client.chapters.create({ data: { ...newChapter, postsId } })
}

async function editChapter(newChapterData: NewChapter, chapterId: number) {
    return client.chapters.update({
        where: { id: chapterId },
        data: {
            title: newChapterData.title,
            content: newChapterData.content,
            lastEdit: newChapterData.lastEdit
        }
    })
}

async function deleteChapterById(chapterId: number) {
    return client.chapters.delete({ where: { id: chapterId } });
}

async function getChaptersByPostId(postId: number) {
    return client.chapters.findMany({
        where: { postsId: postId },
        orderBy: {
            id: 'asc'
        }
    })
}

async function getPosterIdByChapterId(chapterId: number) {
    const id = await client.$executeRaw`
    SELECT users.id
    FROM chapters
    JOIN users
    ON chapters.posterId = users.id
    WHERE chapters.id = ${chapterId}`
    if(!id) throw notFoundError();

    return id;
}

export {
    postNewChapter,
    editChapter,
    deleteChapterById,
    getChaptersByPostId,
    getPosterIdByChapterId
}
