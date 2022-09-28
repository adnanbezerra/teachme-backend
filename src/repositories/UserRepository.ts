import { client } from "../database/prisma";
import { INewUser } from "../types/UserTypes";

export async function insertNewUserIntoDatabase(newUser: INewUser) {
    return client.users.create({ data: newUser });
}

export async function getUserByEmail(queryEmail: string) {
    return client.users.findFirst({ where: { email: queryEmail } });
}