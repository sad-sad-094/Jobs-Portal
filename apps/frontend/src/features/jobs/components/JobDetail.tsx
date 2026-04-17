import { Job } from '@job-portal/shared';
import Badge from '../../../components/ui/Badge';
import ApplicationForm from '../../applications/components/ApplicationForm';

interface JobDetailProps {
  job: Job;
}

const modalityLabels: Record<Job['modality'], string> = {
  remote: 'Remote',
  onsite: 'On-site',
  hybrid: 'Hybrid',
};

const experienceLabels: Record<Job['experience'], string> = {
  junior: 'Junior',
  mid: 'Mid',
  'semi-senior': 'Semi Senior',
  senior: 'Senior',
};

const experienceVariants: Record<Job['experience'], 'primary' | 'warning' | 'success' | 'neutral'> =
  {
    junior: 'primary',
    mid: 'warning',
    'semi-senior': 'neutral',
    senior: 'success',
  };

const JobDetail = ({ job }: JobDetailProps) => {
  return (
    <div className="mx-auto max-w-3xl">
      <div className="rounded-(--radius-xl) border border-(--color-border) bg-(--color-surface) p-8">
        <div className="flex flex-col gap-6">
          {/* Header */}
          <div className="flex flex-col gap-2">
            <div className="flex items-start justify-between gap-4">
              <h1 className="text-2xl font-bold text-(--color-text-primary)">{job.title}</h1>
              <Badge
                label={experienceLabels[job.experience]}
                variant={experienceVariants[job.experience]}
              />
            </div>
            <p className="text-(--color-text-secondary)">{job.company}</p>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-2">
            <Badge label={modalityLabels[job.modality]} variant="neutral" />
            <Badge label={job.location} variant="neutral" />
            {job.salaryRange && <Badge label={job.salaryRange} variant="neutral" />}
          </div>

          <hr className="border-(--color-border)" />

          {/* Description */}
          <div className="flex flex-col gap-2">
            <h2 className="font-semibold text-(--color-text-primary)">Description</h2>
            <p className="text-sm leading-relaxed text-(--color-text-secondary)">
              {job.description}
            </p>
          </div>

          {/* Requirements */}
          <div className="flex flex-col gap-2">
            <h2 className="font-semibold text-(--color-text-primary)">Requirements</h2>
            <ul className="flex flex-col gap-1">
              {job.requirements.map((req, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 text-sm text-(--color-text-secondary)"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-(--color-primary)" />
                  {req}
                </li>
              ))}
            </ul>
          </div>

          <hr className="border-(--color-border)" />

          {/* Application Form */}
          <div className="flex flex-col gap-4">
            <h2 className="font-semibold text-(--color-text-primary)">Apply for this position</h2>
            <ApplicationForm jobId={job.id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
