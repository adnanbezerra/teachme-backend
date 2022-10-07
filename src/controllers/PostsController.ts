import { Request, Response } from "express";
import * as postsService from "../services/PostsServices"
import { NewPost, NewPostInfo } from "../types/PostsTypes";

async function createNewPost(req: Request, res: Response) {
    const userId = +res.locals.userId;
    const newPostInfo: NewPost = req.body;

    await postsService.createNewPost(newPostInfo, userId);
}

async function deletePostById(req: Request, res: Response) {
    const postId = +req.params.postId;
    const userId = +res.locals.userId;

    await postsService.deletePostById(postId, userId);

    return res.sendStatus(200);
}

async function getPostsList(req: Request, res: Response) {
    const posts = await postsService.getPosts();

    res.send(posts).status(200);
}

async function getPostById(req: Request, res: Response) {
    const postId = +req.params.postId;

    const post = await postsService.getPostById(postId);

    res.send(post).status(200);
}

async function getTopPosts(req: Request, res: Response) {
    const posts = await postsService.getPostsOrderedByViews();

    res.send(posts).status(200);
}

async function getPostsByName(req: Request, res: Response) {
    const name = req.params.name;

    const posts = await postsService.getPostByName(name);

    res.send(posts).status(200);
}

async function editPostById(req: Request, res: Response) {
    const newInfo: NewPostInfo = req.body;
    const postId = +req.params.postId;
    const userId = +res.locals.userId;

    await postsService.editPostById(postId, newInfo, userId);

    res.sendStatus(200);
}

async function publishPost(req: Request, res: Response) {
    const postId = +req.params.postId;
    const userId = +res.locals.userId;

    await postsService.publishPost(postId, userId);

    res.sendStatus(200);
}

async function likePost(req: Request, res: Response) {
    const postId = +req.params.postId;

    await postsService.likePost(postId);

    res.sendStatus(200);
}

async function viewPost(req: Request, res: Response) {
    const postId = +req.params.postId;

    await postsService.viewPost(postId);

    res.sendStatus(200);
}

export {
    createNewPost,
    deletePostById,
    getPostsList,
    getPostById,
    getTopPosts,
    getPostsByName,
    editPostById,
    publishPost,
    likePost,
    viewPost
}