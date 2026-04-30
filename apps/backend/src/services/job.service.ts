import { Prisma } from '../generated/prisma/client';
import { prisma } from '../db';
import { JobQuery } from '../schemas/job.schema';

export const getAllJobs = async (filters: JobQuery) => {
  const where: Prisma.JobWhereInput = { isActive: true };

  if (filters.modality) {
    where.modality = filters.modality;
  }

  if (filters.experience) {
    where.experience = filters.experience;
  }

  if (filters.roleId) {
    where.roleId = filters.roleId;
  }

  if (filters.search) {
    where.OR = [
      { title: { contains: filters.search, mode: 'insensitive' } },
      { company: { contains: filters.search, mode: 'insensitive' } },
      { description: { contains: filters.search, mode: 'insensitive' } },
    ];
  }

  return prisma.job.findMany({ where });
};

export const getJobById = async (id: string) => {
  return prisma.job.findFirst({ where: { id, isActive: true } });
};
