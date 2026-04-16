import { Router, type IRouter } from 'express';
import { validate } from '../middlewares/validate.middleware';
import { jobQuerySchema } from '../schemas/job.schema';
import { queryJobById, queryJobs } from '../controllers/job.controller';

const router: IRouter = Router();

router.get('/', validate(jobQuerySchema), queryJobs);
router.get('/:id', queryJobById);

export default router;
