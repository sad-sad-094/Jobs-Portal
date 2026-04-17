import { useParams } from '@tanstack/react-router';
import { useJobDetail } from '../features/jobs/hooks/useJobDetail';
import JobDetail from '../features/jobs/components/JobDetail';
import Spinner from '../components/ui/Spinner';
import Button from '../components/ui/Button';
import { useNavigate } from '@tanstack/react-router';

const JobDetailPage = () => {
  const { id } = useParams({ from: '/layout/jobs/$id' });
  const { data, isLoading, isError } = useJobDetail(id);
  const navigate = useNavigate();

  if (isLoading) {
    return (
      <div className="flex justify-center py-16">
        <Spinner size="lg" />
      </div>
    );
  }

  if (isError || !data?.data) {
    return (
      <div className="flex flex-col items-center gap-4 py-16">
        <p className="text-(--color-error)">No se encontró el empleo solicitado.</p>
        <Button variant="secondary" onClick={() => navigate({ to: '/jobs' })}>
          Volver a empleos
        </Button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => navigate({ to: '/jobs' })}
        className="self-start"
      >
        ← Volver a empleos
      </Button>
      <JobDetail job={data.data} />
    </div>
  );
};

export default JobDetailPage;
