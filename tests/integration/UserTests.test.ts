import supertest from "supertest"
import server from "../../src"
import { client } from "../../src/database/prisma"
import { createUser } from "../factories/UserFactory";

beforeEach(async () => {
    await client.$executeRaw`TRUNCATE TABLE "users" RESTART IDENTITY CASCADE`;
})

const connection = supertest(server);

describe("UserRouter tests", () => {

    it("regular post signup", async () => {
        const payload = createUser();
        console.log(payload);

        const result = await connection.post('/signup').send(payload);

        expect(result.status).toEqual(201);
    })

    it("irregular post signup", async () => {
        const payload = {
            email: "",
            password: "lele",
            name: "Adena",
            nickmane: "dena"
        }

        const result = await connection.post('/signup').send(payload);

        expect(result.status).toEqual(422);
    })

    it("post signup with repeated email", async () => {
        const payload = createUser();

        await connection.post('/signup').send(payload);
        const result = await connection.post('/signup').send(payload);

        expect(result.status).toEqual(409);
    })

    it("regular post login", async () => {
        await connection.post('/signup').send(createUser());

        const payload = {
            email: "adnan@gmail.com",
            password: "lele"
        }

        const result = await connection.post('/signin').send(payload);

        expect(result.status).toEqual(200);
        expect(result.body).toBeInstanceOf(Object);
    })

    it("irregular post signin", async () => {
        await connection.post('/signup').send(createUser());

        const payload = {
            email: "",
            password: "lele"
        }

        const result = await connection.post('/signin').send(payload);

        expect(result.status).toEqual(422);
    })

    it("post signin with wrong data", async () => {
        await connection.post('/signup').send(createUser());
        const payload = {
            email: "adnan@gmail.com",
            password: "lili"
        }

        const result = await connection.post('/signin').send(payload);

        expect(result.status).toEqual(401);
    })

    it("get user by id successfully", async () => {
        await connection.post('/signup').send(createUser()); 

        const result = await connection.get("/user/1");

        expect(result.status).toEqual(200);
        expect(result.body).toBeInstanceOf(Object);
    })

    it("get user by id with invalid id", async () => {
        const result = await connection.get("/user/1");

        expect(result.status).toEqual(404);
    })

    it("get users list validly",async () => {
        await connection.post('/signup').send(createUser()); 

        const result = await connection.get("/users/");

        expect(result.status).toEqual(200);
        expect(result.body).toBeInstanceOf(Array);
        expect(result.body.length).toEqual(1);
    })

    it("get empty users list",async () => {
        const result = await connection.get("/users/");

        expect(result.status).toEqual(200);
        expect(result.body).toBeInstanceOf(Array);
        expect(result.body.length).toEqual(0);
    })
})

afterAll(async () => {
    await client.$disconnect();
})