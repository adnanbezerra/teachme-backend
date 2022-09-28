import { Request, Response } from "express";
import { createNewUser, userLogin } from "../services/UserServices";
import { INewUser } from "../types/UserTypes";

export async function postSignin(req: Request, res: Response) {
    const login: INewUser = req.body;

    const token = await userLogin(login);

    res.status(200).send(token);
}

export async function postSignup(req: Request, res: Response) {
    const newUser: INewUser = req.body;

    await createNewUser(newUser);

    res.sendStatus(201);
}