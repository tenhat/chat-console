import { cn } from '@/lib/utils';
import React from 'react';

interface BalloonProps {
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
}
const Balloon = ({ children, className, ariaLabel }: BalloonProps) => {
  return (
    <div
      className={cn('rounded-lg p-3 max-w-[80%] break-words', className)}
      aria-label={ariaLabel}
    >
      {children}
    </div>
  );
};

export default Balloon;
