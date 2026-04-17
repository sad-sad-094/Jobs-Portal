import { useUserStore } from '../../../store/useUserStore';
import { useApplications } from '../hooks/useApplications';
import Badge from '../../../components/ui/Badge';
import Spinner from '../../../components/ui/Spinner';
import type { ApplicationStatus } from '@job-portal/shared';

const statusConfig: Record<
  ApplicationStatus,
  { label: string; variant: 'primary' | 'success' | 'warning' | 'error' | 'neutral' }
> = {
  pending: { label: 'Pendiente', variant: 'warning' },
  reviewed: { label: 'En revisión', variant: 'primary' },
  accepted: { label: 'Aceptado', variant: 'success' },
  rejected: { label: 'Rechazado', variant: 'error' },
};

const ApplicationList = () => {
  const { user } = useUserStore();
  const { data, isLoading, isError } = useApplications(user.id);

  if (isLoading) return <Spinner size="lg" />;

  if (isError) {
    return <p className="text-center text-(--color-error)">Error al cargar las aplicaciones.</p>;
  }

  const applications = data?.data ?? [];

  if (applications.length === 0) {
    return (
      <div className="py-16 text-center">
        <p className="text-(--color-text-secondary)">Aún no has aplicado a ninguna vacante.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {applications.map(appl => {
        const status = statusConfig[appl.status];
        return (
          <div
            key={appl.id}
            className="rounded-(--radius-lg) border border-(--color-border) bg-(--color-surface) p-5"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex flex-col gap-1">
                <p className="font-medium text-(--color-text-primary)">Job ID: {appl.jobId}</p>
                <p className="text-sm text-(--color-text-muted)">
                  Aplicado el{' '}
                  {new Date(appl.appliedAt).toLocaleDateString('es-CO', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </div>
              <Badge label={status.label} variant={status.variant} />
            </div>
            {appl.coverLetter && (
              <p className="mt-3 text-sm text-(--color-text-secondary) line-clamp-2">
                {appl.coverLetter}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ApplicationList;
