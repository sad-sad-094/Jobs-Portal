import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
}

const Input = ({
  label,
  error,
  fullWidth = false,
  className = '',
  id,
  ...props
}: InputProps): JSX.Element => {
  return (
    <div className={`flex flex-col gap-1.5 ${fullWidth ? 'w-full' : ''}`}>
      {label ? (
        <label htmlFor={id} className="text-sm font-medium text-(--color-text-secondary)">
          {label}
        </label>
      ) : null}
      <input
        id={id}
        className={`
          rounded-(--radius-md) border bg-(--color-surface) px-3 py-2 text-sm
          text-(--color-text-primary) placeholder:text-(--color-text-muted)
          transition-colors outline-none
          focus:border-(--color-primary) focus:ring-1 focus:ring-(--color-primary)
          disabled:cursor-not-allowed disabled:opacity-50
          ${error ? 'border-(--color-error)' : 'border-(--color-border)'}
          ${className}
        `}
        {...props}
      />
      {error ? <span className="text-xs text-(--color-error)">{error}</span> : null}
    </div>
  );
};

export default Input;
