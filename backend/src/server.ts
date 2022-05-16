import express, { Request, Response, NextFunction } from 'express'
import 'express-async-errors';
import cors from 'cors';
import path from 'path'

import { router } from './routes'

const app = express();
app.use(express.json());
app.use(cors());

app.use(router);

app.listen(3333, () => console.log('Servidor online!!!!'))