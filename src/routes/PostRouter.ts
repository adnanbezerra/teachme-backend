import { Router } from "express";
import { createNewPost, deletePostById, editPostById, getMyPosts, getPostById, getPostsByName, getPostsList, getTopPosts, likePost, publishPost, viewPost } from "../controllers/PostsController";
import { validateSchema } from "../middlewares/ValidateSchema";
import { ValidateToken } from "../middlewares/ValidateToken";
import { EditPostSchema } from "../schemas/EditPostSchema";
import { NewPostSchema } from "../schemas/NewPostSchema";

export const PostRouter = Router();

// authenticated routes
PostRouter.post("/new-post", validateSchema(NewPostSchema), ValidateToken, createNewPost);
PostRouter.delete("/post/:postId", ValidateToken, deletePostById);
PostRouter.put("/post/:postId", validateSchema(EditPostSchema), ValidateToken, editPostById);
PostRouter.post("/publish-post/:postId", ValidateToken, publishPost);
PostRouter.post("/like-post/:postId", ValidateToken, likePost);
PostRouter.get("/my-posts", ValidateToken, getMyPosts);

// non authenticated routes
PostRouter.post("/view-post/:postId", viewPost);
PostRouter.get("/posts", getPostsList);
PostRouter.get("/post/id/:postId", getPostById);
PostRouter.get("/top-posts", getTopPosts);
PostRouter.get("/post/name/:name", getPostsByName);
