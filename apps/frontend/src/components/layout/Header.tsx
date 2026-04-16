import { Link } from '@tanstack/react-router';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-(--color-border) bg-(--color-background)/90 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-(--color-text-primary)">Jobs</span>
          <span className="text-xl font-bold text-(--color-primary-light)">Portal</span>
        </Link>

        <nav className="flex items-center gap-6">
          <Link
            to="/jobs"
            className="text-sm text-(--color-text-secondary) transition-colors hover:text-(--color-text-primary)"
            activeProps={{ className: 'text-sm text-(--color-text-primary) font-medium' }}
          >
            Empleos
          </Link>
          <Link
            to="/applications"
            className="text-sm text-(--color-text-secondary) transition-colors hover:text-(--color-text-primary)"
            activeProps={{ className: 'text-sm text-(--color-text-primary) font-medium' }}
          >
            Mis Aplicaciones
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
