import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../components/button/button';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Button',
    variant: 'default',
  },
};

export const Destructive: Story = {
  args: {
    children: 'Delete',
    variant: 'destructive',
  },
};

export const Outline: Story = {
  args: {
    children: 'Button',
    variant: 'outline',
  },
};

export const Small: Story = {
  args: {
    children: 'Small',
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    children: 'Large',
    size: 'lg',
  },
};