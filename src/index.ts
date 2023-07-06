import express from 'express';
import 'express-async-errors';
import dotenv from 'dotenv';
import cors from 'cors';
import errorHandler from './middlewares/ErrorHandler';
import { UserRouter } from './routes/UserRouter';
import { PostRouter } from './routes/PostRouter';
import { ChaptersRouter } from './routes/ChaptersRouter';
dotenv.config()

const server = express();
server.use(cors());
server.use(express.json());

// routes
server.use(UserRouter);
server.use(PostRouter);
server.use(ChaptersRouter);
server.use(errorHandler);

export default server;
