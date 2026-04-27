import { Request, Response, NextFunction } from 'express';
import * as applicationService from '../services/application.service';
import { CreateApplicationDTO } from '../schemas/application.schema';

export const applyToJob = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const data: CreateApplicationDTO = req.body;
    const application = await applicationService.createApplication(data);
    res.status(201).json({ success: true, data: application });
  } catch (error) {
    next(error);
  }
};

export const getUserApplications = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const userId = typeof req.query.userId === 'string' ? req.query.userId : undefined;
    if (!userId) {
      res.status(400).json({ success: false, message: 'userId query param is required' });
      return;
    }
    const applications = await applicationService.getApplicationsByUser(userId);
    res.json({ success: true, data: applications, total: applications.length });
  } catch (error) {
    next(error);
  }
};
