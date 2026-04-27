import { prisma } from '../db';

export const getAllRoles = async () => {
  return prisma.role.findMany();
};
