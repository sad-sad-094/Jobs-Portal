import { Request, Response, NextFunction } from 'express';
import * as roleService from '../services/role.service';

export const getRoles = async (_req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const data = await roleService.getAllRoles();
    res.json({ success: true, data });
  } catch (error) {
    next(error);
  }
};
