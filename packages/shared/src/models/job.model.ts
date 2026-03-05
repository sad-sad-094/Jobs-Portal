export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  categoryId: string;
  description: string;
  requirements: string[];
  salaryRange?: string;
  modality: 'remote' | 'onsite' | 'hybrid';
  createdAt: string;
  isActive: boolean;
}
