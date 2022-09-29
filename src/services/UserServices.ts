import { INewUser } from "../types/UserTypes";
import bcrypt from 'bcrypt';
import * as userRepository from "../repositories/UserRepository";
import { Users } from "@prisma/client";
import jwt from 'jsonwebtoken';
import { conflictError, unauthorizedError } from "../utils/errorUtils";

async function createNewUser(newUser: INewUser) {
    await checkNewEmailAvailability(newUser);

    const payload: INewUser = {
        email: newUser.email,
        password: bcrypt.hashSync(newUser.password, 10),
        isAdmin: false,
        name: newUser.name,
        nickname: newUser.nickname
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

export {
    userLogin,
    createNewUser
};