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
        <p className="font-medium text-(--color-success)">Application submitted successfully!</p>
        <p className="mt-1 text-sm text-(--color-text-secondary)">We will get back to you soon.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="rounded-(--radius-md) border border-(--color-border) bg-(--color-surface-raised) p-4">
        <p className="text-sm text-(--color-text-secondary)">Applying as</p>
        <p className="font-medium text-(--color-text-primary)">{user.name}</p>
        <p className="text-sm text-(--color-text-muted)">{user.email}</p>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium text-(--color-text-secondary)">
          Cover letter <span className="text-(--color-text-muted)">(optional)</span>
        </label>
        <textarea
          rows={5}
          value={coverLetter}
          onChange={e => setCoverLetter(e.target.value)}
          placeholder="Tell the employer why you are the ideal candidate..."
          className="rounded-(--radius-md) border border-(--color-border) bg-(--color-surface) px-3 py-2 text-sm text-(--color-text-primary) placeholder:text-(--color-text-muted) outline-none transition-colors focus:border-(--color-primary) focus:ring-1 focus:ring-(--color-primary) resize-none"
        />
      </div>

      {isError && (
        <p className="text-sm text-(--color-error)">
          {(error as { message?: string })?.message ?? 'Failed to submit the application'}
        </p>
      )}

      <Button onClick={handleSubmit} isLoading={isPending} fullWidth>
        Apply now
      </Button>
    </div>
  );
};

export default ApplicationForm;
