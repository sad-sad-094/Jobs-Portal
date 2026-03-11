import { Application, toISODate } from '@job-portal/shared';

export const applicationsMock: Application[] = [
  {
    id: 'app-1',
    jobId: 'job-1',
    userId: 'user-1',
    applicantName: 'Lucía Fernández',
    applicantEmail: 'lucia.fernandez@email.com',
    coverLetter:
      'I have been working with React and TypeScript for over 3 years and I am excited about this opportunity. I love building clean, accessible UIs and collaborating with cross-functional teams.',
    status: 'pending',
    appliedAt: toISODate('2026-03-05T10:00:00.000Z'),
  },
  {
    id: 'app-2',
    jobId: 'job-2',
    userId: 'user-2',
    applicantName: 'Martín Gómez',
    applicantEmail: 'martin.gomez@email.com',
    coverLetter:
      'With 6 years of Node.js experience and a strong background in microservices architecture, I believe I am a great fit for this senior backend role at Globant.',
    status: 'reviewed',
    appliedAt: toISODate('2026-03-06T14:30:00.000Z'),
  },
  {
    id: 'app-3',
    jobId: 'job-5',
    userId: 'user-3',
    applicantName: 'Camila Rodríguez',
    applicantEmail: 'camila.rodriguez@email.com',
    status: 'rejected',
    appliedAt: toISODate('2026-03-07T09:15:00.000Z'),
  },
  {
    id: 'app-4',
    jobId: 'job-10',
    userId: 'user-4',
    applicantName: 'Sebastián Torres',
    applicantEmail: 'sebastian.torres@email.com',
    coverLetter:
      'I have led product teams at two LatAm startups and have a strong track record of working with engineering and data teams to ship high-impact features on time.',
    status: 'accepted',
    appliedAt: toISODate('2026-03-08T11:45:00.000Z'),
  },
];
