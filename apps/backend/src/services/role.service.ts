import { Role } from '@job-portal/shared';
import { rolesMock } from '../data/role.mock';

export function getAllRoles(): Role[] {
  return rolesMock;
}
