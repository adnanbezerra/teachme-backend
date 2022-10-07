import { Users } from "@prisma/client";

export type INewUser = Omit<Users, "id" | "biography" >;
export type EditInfo = Omit<Users, "id" | "password" | "isAdmin">;