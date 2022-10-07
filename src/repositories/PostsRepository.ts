import { client } from "../database/prisma";
import { NewPost, NewPostInfo } from "../types/PostsTypes";

async function createNewPost(newPostInfo: NewPost) {
    return client.posts.create({ data: newPostInfo });
}

async function deletePostById(postId: number) {
    return client.posts.delete({ where: { id: postId } });
}

async function getPosts() {
    return client.posts.findMany({ where: { isPublished: true } });
}

async function getPostById(postId: number) {
    return client.posts.findFirst({ where: { id: postId, isPublished: true } });
}

async function getPostByName(postName: string) {
    return client.$executeRaw`
        SELECT id, name, description, "creationDate", views, likes
        FROM posts
        WHERE name ILIKE %${postName}%
        AND "isPublished"=true
    `
}

async function getPostsOrderedByViews() {
    return client.posts.findMany({
        orderBy: {
            likes: 'desc',
            views: 'desc'
        },
        where: {
            isPublished: true
        }
    })
}

async function editPostById(postId: number, newPostInfo: NewPostInfo) {
    return client.posts.update({
        where: { id: postId },
        data: {
            name: newPostInfo.name
        }
    });
}

async function publishPost(postId: number) {
    return client.posts.update({
        where: { id: postId },
        data: {
            isPublished: true
        }
    });
}

async function viewPost(postId: number) {
    return client.posts.update({
        where: { id: postId },
        data: {
            views: {
                increment: 1
            }
        }
    })
}

async function likePost(postId: number) {
    return client.posts.update({
        where: { id: postId },
        data: {
            likes: {
                increment: 1
            }
        }
    })
}

export {
    createNewPost,
    deletePostById,
    getPosts,
    getPostById,
    getPostByName,
    getPostsOrderedByViews,
    editPostById,
    publishPost,
    viewPost,
    likePost
}