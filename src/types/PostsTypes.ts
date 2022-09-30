import { Posts } from "@prisma/client";

export type NewPost = Omit<Posts, "id" | "views" | "likes" | "isPublished">;
export type NewPostInfo = Omit<Posts, "id" | "isPublished" | "views" | "likes">