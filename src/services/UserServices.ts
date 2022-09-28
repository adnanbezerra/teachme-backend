import { INewUser } from "../types/UserTypes";
import bcrypt from 'bcrypt';
import { getUserByEmail, insertNewUserIntoDatabase } from "../repositories/UserRepository";
import { Users } from "@prisma/client";
import jwt from 'jsonwebtoken';

export async function createNewUser(newUser: INewUser) {
    await checkNewEmailAvailability(newUser);

    const payload: INewUser = { email: newUser.email, password: bcrypt.hashSync(newUser.password, 10) }

    await insertNewUserIntoDatabase(payload);
}

export async function userLogin(login: INewUser) {
    const SECRET_KEY = process.env.JWT_SECRET;
    const EXPIRATION = process.env.TOKEN_EXPIRES_IN;

    const user = await checkIfUserExists(login);
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
    const user = await getUserByEmail(newLogin.email);

    if (user) throw { type: "error_user_inUse", message: "This e-mail is already in use!" }
}

async function checkIfUserExists(newLogin: INewUser) {
    const user = await getUserByEmail(newLogin.email);   

    if (!user) throw { type: "error_wrongLogin", message: "Wrong e-mail or password!" }

    return user;
}

function verifyLoginPassword(newLogin: INewUser, userFromDatabase: Users) {
    const verify = bcrypt.compareSync(newLogin.password, userFromDatabase.password);

    if (!verify) throw { type: "error_wrongLogin", message: "Wrong e-mail or password!" }
}