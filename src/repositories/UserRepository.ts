import { client } from "../database/prisma";
import { EditInfo, INewUser } from "../types/UserTypes";

async function createNewUser(newUser: INewUser) {
    return client.users.create({ data: newUser });
}

async function getUserByEmail(queryEmail: string) {
    return client.users.findFirst({ where: { email: queryEmail } });
}

async function getUserByNickname(queryName: string) {
    return client.users.findFirst({
        where: { name: queryName },
        select: {
            id: true,
            name: true,
            email: true,
            biography: true,
            profilePicture: true,
            isAdmin: true
        }
    });
}

async function getUserById(queryId: number) {
    return client.users.findFirst({
        where: { id: queryId },
        select: {
            id: true,
            name: true,
            email: true,
            biography: true,
            profilePicture: true,
            isAdmin: true
        }
    });
}

async function getUsersList() {
    return client.users.findMany({
        select: {
            id: true,
            name: true,
            email: true,
            biography: true,
            profilePicture: true,
            isAdmin: true
        }
    });
}

async function deleteUserById(queryId: number) {
    return client.users.delete({ where: { id: queryId } });
}

async function editUserById(queryId: number, newInfo: EditInfo) {
    return client.users.update({
        where: { id: queryId },
        data: {
            name: newInfo.name,
            email: newInfo.email,
            biography: newInfo.biography,
            profilePicture: newInfo.profilePicture
        }
    })
}

async function getUserMe(userId: number) {
    return client.users.findFirst({
        where: { id: userId },
        select: {
            id: true,
            name: true,
            email: true,
            biography: true,
            profilePicture: true,
            isAdmin: true
        }
    })
}

export {
    createNewUser,
    getUserByEmail,
    getUserByNickname,
    getUserById,
    getUsersList,
    deleteUserById,
    editUserById,
    getUserMe
}
