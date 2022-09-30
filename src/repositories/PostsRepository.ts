import { client } from "../database/prisma";
import { NewPost, NewPostInfo } from "../types/PostsTypes";

async function createNewPost(newPostInfo: NewPost) {
    return client.posts.create({ data: newPostInfo });
}

async function deletePostById(postId: number) {
    return client.posts.delete({ where: { id: postId } });
}

async function getPosts() {
    return client.posts.findMany();
}

async function getPostById(postId: number) {
    return client.posts.findFirst({ where: { id: postId } });
}

async function getPostsOrderedByViews() {
    return client.posts.findMany({
        orderBy: {
            likes: 'desc',
            views: 'desc'
        }
    })
}

async function editPostById(postId: number, newPostInfo: NewPostInfo) {
    return client.posts.update({
        where: { id: postId },
        data: {
            name: newPostInfo.name,
            posterId: newPostInfo.posterId,
            creationDate: newPostInfo.creationDate
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
    getPostsOrderedByViews,
    editPostById,
    publishPost,
    viewPost,
    likePost
}