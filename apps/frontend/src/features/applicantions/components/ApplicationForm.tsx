import { useState } from 'react';
import { useUserStore } from '../../../store/useUserStore';
import { useApply } from '../hooks/useApply';
import Button from '../../../components/ui/Button';

interface ApplicationFormProps {
  jobId: string;
  onSuccess?: () => void;
}

const ApplicationForm = ({ jobId, onSuccess }: ApplicationFormProps) => {
  const { user } = useUserStore();
  const { mutate: apply, isPending, isSuccess, isError, error } = useApply();
  const [coverLetter, setCoverLetter] = useState('');

  const handleSubmit = () => {
    apply(
      {
        jobId,
        userId: user.id,
        applicantName: user.name,
        applicantEmail: user.email,
        coverLetter: coverLetter || undefined,
      },
      { onSuccess },
    );
  };

  if (isSuccess) {
    return (
      <div className="rounded-(--radius-lg) border border-(--color-success)/30 bg-(--color-success)/10 p-6 text-center">
        <p className="font-medium text-(--color-success)">¡Aplicación enviada exitosamente!</p>
        <p className="mt-1 text-sm text-(--color-text-secondary)">
          Nos pondremos en contacto contigo pronto.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="rounded-(--radius-md) border border-(--color-border) bg-(--color-surface-raised) p-4">
        <p className="text-sm text-(--color-text-secondary)">Aplicando como</p>
        <p className="font-medium text-(--color-text-primary)">{user.name}</p>
        <p className="text-sm text-(--color-text-muted)">{user.email}</p>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium text-(--color-text-secondary)">
          Carta de presentación <span className="text-(--color-text-muted)">(opcional)</span>
        </label>
        <textarea
          rows={5}
          value={coverLetter}
          onChange={e => setCoverLetter(e.target.value)}
          placeholder="Cuéntale al empleador por qué eres el candidato ideal..."
          className="rounded-(--radius-md) border border-(--color-border) bg-(--color-surface) px-3 py-2 text-sm text-(--color-text-primary) placeholder:text-(--color-text-muted) outline-none transition-colors focus:border-(--color-primary) focus:ring-1 focus:ring-(--color-primary) resize-none"
        />
      </div>

      {isError && (
        <p className="text-sm text-(--color-error)">
          {(error as { message?: string })?.message ?? 'Error al enviar la aplicación'}
        </p>
      )}

      <Button onClick={handleSubmit} isLoading={isPending} fullWidth>
        Aplicar ahora
      </Button>
    </div>
  );
};

export default ApplicationForm;
