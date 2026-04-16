import { Router, type IRouter } from 'express';
import { applyToJob, getUserApplications } from '../controllers/application.controller';
import { validate } from '../middlewares/validate.middleware';
import { createApplicationSchema } from '../schemas/application.schema';

const router: IRouter = Router();

router.post('/', validate(createApplicationSchema), applyToJob);
router.get('/', getUserApplications);

export default router;
