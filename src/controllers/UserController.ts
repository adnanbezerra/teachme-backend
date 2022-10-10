import { Request, Response } from "express";
import * as userService from "../services/UserServices";
import { EditInfo, INewUser } from "../types/UserTypes";

export async function postSignin(req: Request, res: Response) {
    const login: INewUser = req.body;

    const user = await userService.userLogin(login);

    res.status(200).send(user);
}

export async function postSignup(req: Request, res: Response) {
    const newUser: INewUser = req.body;

    await userService.createNewUser(newUser);

    res.sendStatus(201);
}

export async function getUserById(req: Request, res: Response) {
    const id = +req.params.id;

    const user = await userService.getUserById(id);

    res.status(200).send(user);
}

export async function getUsersList(req: Request, res: Response) {
    const users = await userService.getUsersList();

    res.status(200).send(users);
}

export async function putUserById(req: Request, res: Response) {
    const id = +req.params.id;
    const userId = +res.locals.id;
    const newInfo: EditInfo = req.body;

    await userService.editUser(id, userId, newInfo);
}

export async function deleteUserById(req: Request, res: Response) {
    const id = +req.params.id;
    const userId = +res.locals.id;

    await userService.deleteUser(id, userId);

    res.sendStatus(200);
}

export async function getUserMe(req: Request, res: Response) {
    const userId = +res.locals.id;

    const user = await userService.getUserMe(userId);

    res.status(200).send(user);
}