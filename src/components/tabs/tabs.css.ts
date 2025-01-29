import { style, styleVariants } from '@vanilla-extract/css';

export const tabList = style({
  display: 'flex',
  borderBottom: '1px solid #e2e8f0',
  marginBottom: '16px',
});

export const tab = style({
  padding: '8px 16px',
  border: 'none',
  background: 'none',
  cursor: 'pointer',
  fontSize: '14px',
  fontWeight: 500,
  color: '#4a5568',
  transition: 'all 0.2s',
  ':hover': {
    color: '#2d3748',
  },
  ':focus-visible': {
    outline: 'none',
    boxShadow: '0 0 0 2px rgba(66, 153, 225, 0.5)',
  },
});

export const tabState = styleVariants({
  active: {
    color: '#3182ce',
    borderBottom: '2px solid #3182ce',
    marginBottom: '-1px',
  },
  inactive: {},
});

export const tabPanel = style({
  padding: '16px 0',
});