import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from '../components/tabs/tabs';

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultTabs = [
  {
    id: 'tab1',
    label: 'Account',
    content: 'Account settings and preferences',
  },
  {
    id: 'tab2',
    label: 'Password',
    content: 'Update your password',
  },
  {
    id: 'tab3',
    label: 'Notifications',
    content: 'Manage your notification preferences',
  },
];

export const Default: Story = {
  args: {
    tabs: defaultTabs,
  },
};

export const WithDefaultTab: Story = {
  args: {
    tabs: defaultTabs,
    defaultTab: 'tab2',
  },
};