import { Router, type IRouter } from 'express';
import { getRoles } from '../controllers/role.controller';

const router: IRouter = Router();

router.get('/', getRoles);

export default router;
