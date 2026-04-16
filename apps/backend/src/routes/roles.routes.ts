import { Router, type IRouter } from 'express';
import { queryRoles } from '../controllers/role.controller';

const router: IRouter = Router();

router.get('/', queryRoles);

export default router;
