import { faker } from "@faker-js/faker";
import supertest from "supertest";
import server from "../../src";
import { client } from "../../src/database/prisma";

export function createUser() {
    const createAccount = {
        email: "adnan@gmail.com",
        password: "lele",
        name: "Adena",
        nickname: "dena"
    }

    return createAccount;
}

export async function createValidToken() {
    return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJhZG5hbkBnb29nbGUuY29tIiwiaWF0IjoxNjY0NTM3MTI1LCJleHAiOjE2NjUxNDE5MjV9.iszK4zjsavU4vlnU_t_Pc59eZNTvl-b2Z4nEjO_Jj8g";
}