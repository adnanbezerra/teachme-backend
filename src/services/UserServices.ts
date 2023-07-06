import { EditInfo, INewUser } from "../types/UserTypes";
import bcrypt from 'bcrypt';
import * as userRepository from "../repositories/UserRepository";
import { Users } from "@prisma/client";
import jwt from 'jsonwebtoken';
import { conflictError, notFoundError, unauthorizedError } from "../utils/errorUtils";
import { checkIfIsAdminOrIsHimself } from "../utils/checkAdminOrItself";

async function createNewUser(newUser: INewUser) {
    await checkNewEmailAvailability(newUser);

    const payload: INewUser = {
        email: newUser.email,
        password: bcrypt.hashSync(newUser.password, 10),
        isAdmin: false,
        profilePicture: newUser.profilePicture,
        name: newUser.name
    };

    await userRepository.createNewUser(payload);
}

async function userLogin(login: INewUser) {
    const SECRET_KEY = process.env.JWT_SECRET;
    const EXPIRATION = process.env.TOKEN_EXPIRES_IN;

    const user = await getUserFromDatabase(login);
    verifyLoginPassword(login, user);

    const payload = {
        id: user.id,
        email: user.email
    }

    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: EXPIRATION });

    return token;
}

async function getUserById(id: number) {
    const user = await userRepository.getUserById(id);
    if (!user) throw notFoundError();

    return user;
}

async function getUsersList() {
    const users = await userRepository.getUsersList();

    return users;
};

async function deleteUser(idFromRequest: number, userId: number) {
    await checkIfIsAdminOrIsHimself(idFromRequest, userId);

    await userRepository.deleteUserById(idFromRequest);
}

async function editUser(idFromRequest: number, userId: number, newInfo: EditInfo) {
    await checkIfIsAdminOrIsHimself(idFromRequest, userId);

    await userRepository.editUserById(idFromRequest, newInfo);
}

async function getUserMe(userId: number) {
    const user = await userRepository.getUserMe(userId);
    if(!user) throw notFoundError();

    return user;
}

// auxiliary functions

async function checkNewEmailAvailability(newLogin: INewUser) {
    const user = await userRepository.getUserByEmail(newLogin.email);

    if (user) throw conflictError("Email already in use!");
}

async function getUserFromDatabase(newLogin: INewUser) {
    const user = await userRepository.getUserByEmail(newLogin.email);

    if (!user) throw unauthorizedError("Wrong email or password!");

    return user;
}

function verifyLoginPassword(newLogin: INewUser, userFromDatabase: Users) {
    const verify = bcrypt.compareSync(newLogin.password, userFromDatabase.password);

    if (!verify) throw unauthorizedError("Wrong email or password!");
}

// exports

export {
    userLogin,
    createNewUser,
    getUserById,
    getUsersList,
    deleteUser,
    editUser,
    getUserMe
};
