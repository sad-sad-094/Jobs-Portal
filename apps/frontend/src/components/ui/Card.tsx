import { HTMLAttributes } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean;
}

const Card = ({ hoverable = false, children, className = '', ...props }: CardProps) => {
  return (
    <div
      className={`
        rounded-(--radius-lg) border border-(--color-border) bg-(--color-surface) p-6
        ${hoverable ? 'transition-colors hover:border-(--color-primary)/50 hover:bg-(--color-surface-raised) cursor-pointer' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
