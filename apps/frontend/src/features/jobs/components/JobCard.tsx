import { Job } from '@job-portal/shared';
import { useNavigate } from '@tanstack/react-router';
import Card from '../../../components/ui/Card';
import Badge from '../../../components/ui/Badge';

interface JobCardProps {
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

const JobCard = ({ job }: JobCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate({ to: '/jobs/$id', params: { id: job.id } });
  };

  return (
    <Card hoverable onClick={handleClick}>
      <div className="flex flex-col gap-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-1">
            <h3 className="font-semibold text-(--color-text-primary)">{job.title}</h3>
            <p className="text-sm text-(--color-text-secondary)">{job.company}</p>
          </div>
          <Badge
            label={experienceLabels[job.experience]}
            variant={experienceVariants[job.experience]}
          />
        </div>

        <p className="line-clamp-2 text-sm text-(--color-text-muted)">{job.description}</p>

        <div className="flex flex-wrap items-center gap-2">
          <Badge label={modalityLabels[job.modality]} variant="neutral" />
          <Badge label={job.location} variant="neutral" />
          {job.salaryRange && <Badge label={job.salaryRange} variant="neutral" />}
        </div>
      </div>
    </Card>
  );
};

export default JobCard;
