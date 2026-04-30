import { useNavigate } from '@tanstack/react-router';
import Button from '../components/ui/Button';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center gap-8 py-24 text-center">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold text-(--color-text-primary)">
          Find your next <span className="text-(--color-primary-light)">tech job</span>
        </h1>
        <p className="mx-auto max-w-xl text-(--color-text-secondary)">
          Explore hundreds of openings in development, design, data and more. Filter by modality,
          experience and technology.
        </p>
      </div>

      <div className="flex gap-4">
        <Button size="lg" onClick={() => navigate({ to: '/jobs' })}>
          Browse available jobs
        </Button>
        <Button size="lg" variant="secondary" onClick={() => navigate({ to: '/applications' })}>
          My applications
        </Button>
      </div>
    </div>
  );
};

export default HomePage;
