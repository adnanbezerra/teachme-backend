import supertest from "supertest"
import server from "../../src"
import { client } from "../../src/database/prisma"
import { createUser } from "../factories/UserFactory";

beforeEach(async () => {
    await client.$executeRaw`TRUNCATE TABLE "users"`;
})

describe("UserRouter tests", () => {   

    it("regular post signup", async () => {
        const payload = {
            email: "adnan@google.com",
            password: "lele",
            confirmPassword: "lele"
        }

        const result = await supertest(server).post('/signup').send(payload);

        expect(result.status).toEqual(201);
    })

    it("irregular post signup", async ()=> {
        const payload = {
            email: "",
            password: "lele",
            confirmPassword: "lele"
        }

        const result = await supertest(server).post('/signup').send(payload);

        expect(result.status).toEqual(422);
    })

    it("post signup with repeated email", async ()=> {
        const payload = {
            email: "",
            password: "lele",
            confirmPassword: "lele"
        }

        await supertest(server).post('/signup').send(payload);
        const result = await supertest(server).post('/signup').send(payload);

        expect(result.status).toEqual(422);
    })

    it("regular post login", async () => {
        const payload = {
            email: "adnan@gmail.com",
            password: "lele"
        }

        const result = await supertest(server).post('/signin').send(payload);

        expect(result.status).toEqual(200);
        expect(result.body).toBeInstanceOf(Object);
    })

    it("irregular post signin", async ()=> {
        const payload = {
            email: "",
            password: "lele"
        }

        const result = await supertest(server).post('/signin').send(payload);

        expect(result.status).toEqual(422);
    })

    it("post signin with wrong data", async ()=> {
        const payload = {
            email: "adnan@gmail.com",
            password: "lili"
        }

        const result = await supertest(server).post('/signin').send(payload);

        expect(result.status).toEqual(401);
    })
})

afterAll(async () => {
    await client.$disconnect();
})