import { style, styleVariants } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

const base = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '6px',
  fontSize: '14px',
  fontWeight: 500,
  transition: 'all 0.2s',
  cursor: 'pointer',
  border: 'none',
  outline: 'none',
  ':disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
  ':focus-visible': {
    boxShadow: '0 0 0 2px rgba(66, 153, 225, 0.5)',
  },
});

const variants = styleVariants({
  default: {
    backgroundColor: '#3182ce',
    color: 'white',
    ':hover': {
      backgroundColor: '#2b6cb0',
    },
  },
  destructive: {
    backgroundColor: '#e53e3e',
    color: 'white',
    ':hover': {
      backgroundColor: '#c53030',
    },
  },
  outline: {
    backgroundColor: 'transparent',
    border: '1px solid #e2e8f0',
    color: '#2d3748',
    ':hover': {
      backgroundColor: '#f7fafc',
    },
  },
});

const sizes = styleVariants({
  sm: {
    height: '32px',
    padding: '0 12px',
  },
  default: {
    height: '40px',
    padding: '0 16px',
  },
  lg: {
    height: '48px',
    padding: '0 24px',
  },
});

export const button = recipe({
  base,
  variants: {
    variant: variants,
    size: sizes,
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});