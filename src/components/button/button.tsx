import React from 'react';
import { button } from './button.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'destructive' | 'outline';
  size?: 'sm' | 'default' | 'lg';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={button({ variant, size })}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';