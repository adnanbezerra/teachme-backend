import { Chapters } from "@prisma/client";

export type NewChapter = Omit<Chapters, "id" | "postsId">
