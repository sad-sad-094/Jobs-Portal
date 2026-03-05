export type ApplicationStatus = 'pending' | 'reviewed' | 'rejected' | 'accepted';

export interface Application {
  id: string;
  jobId: string;
  userId: string;
  applicantName: string;
  applicantEmail: string;
  coverLetter?: string;
  status: ApplicationStatus;
  appliedAt: string;
}
