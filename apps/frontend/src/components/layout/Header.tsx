import { Link } from '@tanstack/react-router';

const Header = (): JSX.Element => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-(--color-border) bg-(--color-background)/90 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:h-16 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-1.5 sm:gap-2">
          <span className="text-lg font-bold text-(--color-text-primary) sm:text-xl">Jobs</span>
          <span className="text-lg font-bold text-(--color-primary-light) sm:text-xl">Portal</span>
        </Link>

        <nav className="flex items-center gap-4 sm:gap-6">
          <Link
            to="/jobs"
            className="text-sm text-(--color-text-secondary) transition-colors hover:text-(--color-text-primary)"
            activeProps={{ className: 'text-sm text-(--color-text-primary) font-medium' }}
          >
            Jobs
          </Link>
          <Link
            to="/applications"
            className="text-sm text-(--color-text-secondary) transition-colors hover:text-(--color-text-primary)"
            activeProps={{ className: 'text-sm text-(--color-text-primary) font-medium' }}
          >
            <span className="hidden sm:inline">My Applications</span>
            <span className="sm:hidden">Applications</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
