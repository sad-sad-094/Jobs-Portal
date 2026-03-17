import { ISODateString } from '../types';

export type ExperienceLevel = 'junior' | 'mid' | 'semi senior' | 'senior';
export type JobModality = 'remote' | 'onsite' | 'hybrid';

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  role: string;
  description: string;
  requirements: string[];
  technologies: string[];
  experience: ExperienceLevel;
  salaryRange?: string;
  modality: JobModality;
  createdAt: ISODateString;
  isActive: boolean;
}
