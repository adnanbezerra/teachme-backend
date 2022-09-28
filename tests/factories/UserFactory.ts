import { faker } from "@faker-js/faker";
import supertest from "supertest";
import server from "../../src";
import { client } from "../../src/database/prisma";

export function createUser() {
    const createAccount = {
        email: "adnan@gmail.com",
        password: "lele",
        confirmPassword: "lele"
    }

    return createAccount;
}

export async function createValidToken() {
    return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhZG5hbkBnb29nbGUuY29tIiwiaWF0IjoxNjYzMzUzMjQ1LCJleHAiOjE2NjM5NTgwNDV9.-PGnWnNU3uz3n-uW-jqwHsBihOvzW83tPAu3lcJqSQA";
}