import { Job } from '@job-portal/shared';
import JobCard from './JobCard';
import Spinner from '../../../components/ui/Spinner';

interface JobListProps {
  jobs: Job[];
  isLoading: boolean;
  isError: boolean;
}

const JobList = ({ jobs, isLoading, isError }: JobListProps) => {
  if (isLoading) {
    return (
      <div className="flex justify-center py-16">
        <Spinner size="lg" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="py-16 text-center">
        <p className="text-(--color-error)">Failed to load jobs.</p>
        <p className="mt-1 text-sm text-(--color-text-muted)">Please try again in a moment.</p>
      </div>
    );
  }

  if (jobs.length === 0) {
    return (
      <div className="py-16 text-center">
        <p className="text-(--color-text-secondary)">
          No jobs found matching the selected filters.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {jobs.map(job => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
};

export default JobList;
