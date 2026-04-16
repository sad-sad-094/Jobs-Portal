import { v4 as uuidv4 } from 'uuid';
import { Application, toISODate } from '@job-portal/shared';
import { applicationsMock } from '../data/applications.mock';
import { CreateApplicationDTO } from '../schemas/application.schema';

export const createApplication = (data: CreateApplicationDTO): Application => {
  const alreadyApplied = applicationsMock.some(
    app => app.jobId === data.jobId && app.userId === data.userId,
  );

  // If user has already applied to one job, returns error.
  if (alreadyApplied) {
    throw new Error('User has already applied to this job');
  }

  // Create a new object with the applicant user info for send to data.
  const newApplication: Application = {
    id: uuidv4(),
    ...data,
    status: 'pending',
    appliedAt: toISODate(new Date().toISOString()),
  };

  // Adds new application to data.
  applicationsMock.push(newApplication);
  return newApplication;
};

export const getApplicationsByUser = (userId: string): Application[] => {
  // Returns applications made by an user by its Id.
  return applicationsMock.filter(app => app.userId === userId);
};
