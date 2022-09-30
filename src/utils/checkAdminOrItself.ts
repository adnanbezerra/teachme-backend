import * as userRepository from "../repositories/UserRepository"
import { notFoundError, unauthorizedError } from "./errorUtils";

export async function checkIfIsAdminOrIsHimself(idFromRequest: number, userId: number) {
    const userFromRequest = await userRepository.getUserById(idFromRequest);
    if (!userFromRequest) throw notFoundError();

    if (userFromRequest.id !== userId) {
        throw unauthorizedError("You must be administrator to do that!")
    } else {
        return;
    }

    if (!userFromRequest.isAdmin) {
        throw unauthorizedError("You must be administrator to do that!");
    }
}