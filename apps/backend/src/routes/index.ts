import { Router, type IRouter } from 'express';
import applicationRoutes from './application.routes';
import jobsRoutes from './jobs.routes';

const router: IRouter = Router();

router.use('/applications', applicationRoutes);
router.use('/jobs', jobsRoutes);

export default router;
