import { Request, Response, NextFunction } from 'express';
import * as roleService from '../services/role.service';

export const queryRoles = (req: Request, res: Response, next: NextFunction): void => {
  try {
    const roles = roleService.getAllRoles();
    res.json({ success: true, data: roles });
  } catch (error) {
    next(error);
  }
};
