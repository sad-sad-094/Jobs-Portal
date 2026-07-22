import { Job } from '@job-portal/shared';
import JobCard from './JobCard';
import JobCardSkeleton from './JobCardSkeleton';

interface JobListProps {
  jobs: Job[];
  isLoading: boolean;
  isError: boolean;
}

const SKELETON_COUNT = 6;

const JobList = ({ jobs, isLoading, isError }: JobListProps) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: SKELETON_COUNT }).map((_, i) => (
          <JobCardSkeleton key={i} />
        ))}
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
    <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {jobs.map(job => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
};

export default JobList;
