import { Router, type IRouter } from 'express';
import applicationRoutes from './application.routes';
import jobsRoutes from './jobs.routes';
import rolesRoutes from './roles.routes';

const router: IRouter = Router();

router.use('/applications', applicationRoutes);
router.use('/jobs', jobsRoutes);
router.use('/roles', rolesRoutes);

export default router;
