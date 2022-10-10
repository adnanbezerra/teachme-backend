import supertest from "supertest"
import server from "../../src"
import { client } from "../../src/database/prisma"

beforeEach(async () => {
    await client.$executeRaw`TRUNCATE TABLE "chapters" RESTART IDENTITY CASCADE`;

})

const connection = supertest(server);

describe("chapters testing cases", () => {
    
});

afterAll(async () => {
    await client.$disconnect();
})