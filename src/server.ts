import express from 'express';
// import apiRouter from './api';
// import { initSocketServer } from './websockets/socketServer';
import http from 'http';

export const app = express();

app.use(express.json());
// app.use('/api', apiRouter);

// const server = http.createServer(app);
// initSocketServer(server);