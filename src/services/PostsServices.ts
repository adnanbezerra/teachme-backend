import { NewPost, NewPostInfo } from "../types/PostsTypes";
import * as postsRepository from "../repositories/PostsRepository";
import { checkIfIsAdminOrIsHimself } from "../utils/checkAdminOrItself";
import { notFoundError } from "../utils/errorUtils";

async function createNewPost(newPostInfo: NewPost, posterId: number) {
    await postsRepository.createNewPost({ ...newPostInfo, posterId });
}

async function deletePostById(postId: number, userId: number) {
    const post = await getPostFromRepository(postId);

    await checkIfIsAdminOrIsHimself(userId, post.posterId);

    await postsRepository.deletePostById(postId);
}

async function getPosts() {
    const posts = await postsRepository.getPosts();
    if (!posts) throw notFoundError();

    return posts;
}

async function getPostById(postId: number) {
    const post = await getPostFromRepository(postId);

    return post;
}

async function getPostsOrderedByViews() {
    const posts = await postsRepository.getPostsOrderedByViews();
    if (!posts) throw notFoundError();

    return posts;
}

async function editPostById(postId: number, newPostInfo: NewPostInfo, userId: number) {
    const post = await getPostFromRepository(postId);

    await checkIfIsAdminOrIsHimself(userId, post.posterId);

    await postsRepository.editPostById(postId, newPostInfo);
}

async function publishPost(postId: number, userId: number) {
    const post = await getPostFromRepository(postId);

    await checkIfIsAdminOrIsHimself(userId, post.posterId);

    await postsRepository.publishPost(postId);
}

async function viewPost(postId: number) {
    const post = await getPostFromRepository(postId);

    await postsRepository.publishPost(postId);
}

async function likePost(postId: number) {
    const post = await getPostFromRepository(postId);

    await postsRepository.publishPost(postId);
}

// support functions

async function getPostFromRepository(postId: number) {
    const post = await postsRepository.getPostById(postId);
    if (!post) throw notFoundError();

    return post;
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