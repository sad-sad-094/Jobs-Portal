import { useNavigate } from '@tanstack/react-router';
import Button from '../components/ui/Button';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center gap-6 py-12 text-center sm:gap-8 sm:py-16 md:py-24">
      <div className="flex flex-col gap-3 sm:gap-4">
        <h1 className="text-3xl font-bold text-(--color-text-primary) sm:text-4xl md:text-5xl">
          Find your next <span className="text-(--color-primary-light)">tech job</span>
        </h1>
        <p className="mx-auto max-w-xl text-sm text-(--color-text-secondary) sm:text-base">
          Explore hundreds of openings in development, design, data and more. Filter by modality,
          experience and technology.
        </p>
      </div>

      <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4">
        <Button size="lg" onClick={() => navigate({ to: '/jobs' })} className="w-full sm:w-auto">
          Browse available jobs
        </Button>
        <Button
          size="lg"
          variant="secondary"
          onClick={() => navigate({ to: '/applications' })}
          className="w-full sm:w-auto"
        >
          My applications
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
