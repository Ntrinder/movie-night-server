import express from 'express';
import apiRouter from "./api";

export const app = express();

app.use(express.json());
app.use('/api', apiRouter);
