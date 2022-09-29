import { client } from "../database/prisma";
import { INewUser } from "../types/UserTypes";

async function createNewUser(newUser: INewUser) {
    return client.users.create({ data: newUser });
}

async function getUserByEmail(queryEmail: string) {
    return client.users.findFirst({ where: { email: queryEmail } });
}

async function getUserByNickname(queryName: string) {
    return client.users.findFirst({ where: { nickname: queryName } });
}

export {
    createNewUser,
    getUserByEmail,
    getUserByNickname
}