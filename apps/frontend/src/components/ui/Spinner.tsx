interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg';
}

const sizeStyles = {
  sm: 'h-4 w-4',
  md: 'h-6 w-6',
  lg: 'h-10 w-10',
};

const Spinner = ({ size = 'md' }: SpinnerProps): JSX.Element => {
  return (
    <div className="flex items-center justify-center">
      <div
        className={`animate-spin rounded-full border-2 border-(--color-border) border-t-(--color-primary) ${sizeStyles[size]}`}
      />
    </div>
  );
};

export default Spinner;
