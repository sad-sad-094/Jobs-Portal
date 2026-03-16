import { Router, type IRouter } from 'express';
import applicationRoutes from './application.routes';

const router: IRouter = Router();

router.use('/applications', applicationRoutes);

export default router;
