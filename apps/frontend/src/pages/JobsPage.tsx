import { useState } from 'react';
import { JobFilters as Filters } from '../services/job.service';
import { useJobs } from '../features/jobs/hooks/useJobs';
import JobList from '../features/jobs/components/JobList';
import JobFilters from '../features/jobs/components/JobFilters';

const JobsPage = () => {
  const [filters, setFilters] = useState<Filters>({});
  const { data, isLoading, isError } = useJobs(filters);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold text-(--color-text-primary)">Available jobs</h1>
        <p className="text-sm text-(--color-text-secondary)">{data?.total ?? 0} openings found</p>
      </div>

      <JobFilters filters={filters} onChange={setFilters} />

      <JobList jobs={data?.data ?? []} isLoading={isLoading} isError={isError} />
    </div>
  );
};

export default JobsPage;
