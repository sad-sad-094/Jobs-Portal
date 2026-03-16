import express, { Express } from 'express';
import cors from 'cors';
import router from './routes/index';
import { errorMiddleware } from './middlewares/error.middleware';

const app: Express = express();

app.use(cors());
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.use('/api', router);

app.use(errorMiddleware);

export default app;
