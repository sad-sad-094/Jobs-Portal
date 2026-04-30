import { v4 as uuidv4 } from 'uuid';
import { prisma } from '../db';
import { CreateApplicationDTO } from '../schemas/application.schema';

export const createApplication = async (data: CreateApplicationDTO) => {
  const job = await prisma.job.findFirst({ where: { id: data.jobId, isActive: true } });
  if (!job) {
    throw new Error(`Job with id ${data.jobId} not found or inactive`);
  }

  const alreadyApplied = await prisma.application.findFirst({
    where: { jobId: data.jobId, userId: data.userId },
  });
  if (alreadyApplied) {
    throw new Error('User has already applied to this job');
  }

  return prisma.application.create({
    data: {
      id: uuidv4(),
      ...data,
      status: 'pending',
    },
  });
};

export const getApplicationsByUser = async (userId: string) => {
  return prisma.application.findMany({ where: { userId } });
};
