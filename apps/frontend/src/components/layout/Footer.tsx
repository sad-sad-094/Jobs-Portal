const Footer = (): JSX.Element => {
  return (
    <footer className="border-t border-(--color-border) bg-(--color-background)">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-(--color-text-primary)">Jobs</span>
            <span className="text-sm font-bold text-(--color-primary-light)">Portal</span>
          </div>
          <p className="text-sm text-(--color-text-muted)">
            &copy; {new Date().getFullYear()} JobsPortal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
