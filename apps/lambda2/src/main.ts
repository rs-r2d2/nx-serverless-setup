import express from 'express';
import { getHandler } from './app/handler';
import serverless from 'serverless-http';

const app = express();

app.get('/', getHandler, );

export const handler = serverless(app);

