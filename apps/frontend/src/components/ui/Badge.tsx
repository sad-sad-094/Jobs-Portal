type BadgeVariant = 'primary' | 'success' | 'warning' | 'error' | 'neutral';

interface BadgeProps {
  label: string;
  variant?: BadgeVariant;
}

const variantStyles: Record<BadgeVariant, string> = {
  primary: 'bg-(--color-primary)/20 text-(--color-primary-light)',
  success: 'bg-(--color-success)/20 text-(--color-success)',
  warning: 'bg-(--color-warning)/20 text-(--color-warning)',
  error: 'bg-(--color-error)/20 text-(--color-error)',
  neutral: 'bg-(--color-surface-raised) text-(--color-text-secondary)',
};

const Badge = ({ label, variant = 'neutral' }: BadgeProps) => {
  return (
    <span
      className={`inline-flex items-center rounded-(--radius-sm) px-2 py-0.5 text-xs font-medium ${variantStyles[variant]}`}
    >
      {label}
    </span>
  );
};

export default Badge;
