import { Request, Response, NextFunction } from 'express';
import * as applicationService from '../services/application.service';
import { CreateApplicationDTO } from '../schemas/application.schema';

/**
 * POST handler for submitting a job application.
 *
 * Reads the validated application payload from `req.body`, delegates creation
 * to the service layer, and responds with the newly created application.
 *
 * Errors are forwarded to Express's error-handling middleware via `next(error)`.
 *
 * @route POST /applications (or wherever this controller is mounted)
 * @responds 201 { success: true, data: Application }
 */

export const applyToJob = (req: Request, res: Response, next: NextFunction): void => {
  try {
    const data: CreateApplicationDTO = req.body;
    const application = applicationService.createApplication(data);
    res.status(201).json({ success: true, data: application });
  } catch (error) {
    next(error);
  }
};

/**
 * GET handler for retrieving all applications submitted by a specific user.
 *
 * Reads `userId` from the query string (e.g. `?userId=abc123`), fetches the
 * matching applications from the service layer, and returns them alongside a
 * `total` count.
 *
 * Errors are forwarded to Express's error-handling middleware via `next(error)`.
 *
 * @route GET /applications?userId=<userId>
 * @responds 200 { success: true, data: Application[], total: number }
 */

export const getUserApplications = (req: Request, res: Response, next: NextFunction): void => {
  try {
    const { userId } = req.query;

    if (typeof userId !== 'string' || !userId) {
      res
        .status(400)
        .json({ success: false, errors: [{ field: 'userId', message: 'userId is required' }] });
      return;
    }

    const applications = applicationService.getApplicationsByUser(userId);
    res.json({ success: true, data: applications, total: applications.length });
  } catch (error) {
    next(error);
  }
};
