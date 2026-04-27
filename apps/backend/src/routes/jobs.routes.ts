import { Router, type IRouter } from 'express';
import { validate } from '../middlewares/validate.middleware';
import { jobQuerySchema } from '../schemas/job.schema';
import { getJobById, queryJobs } from '../controllers/job.controller';

const router: IRouter = Router();

router.get('/', validate(jobQuerySchema), queryJobs);
router.get('/:id', getJobById);

export default router;
