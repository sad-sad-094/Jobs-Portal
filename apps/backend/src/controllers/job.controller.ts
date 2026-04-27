import { Request, Response, NextFunction } from 'express';
import * as jobService from '../services/job.service';

export const queryJobs = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const filters = req.query;
    const data = await jobService.getAllJobs(filters);
    res.json({ success: true, data, total: data.length });
  } catch (error) {
    next(error);
  }
};

export const getJobById = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const job = await jobService.getJobById(req.params.id);
    if (!job) {
      res.status(404).json({ success: false, message: 'Job not found' });
      return;
    }
    res.json({ success: true, data: job });
  } catch (error) {
    next(error);
  }
};
