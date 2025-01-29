import { vi, describe, it, expect } from 'vitest';
import { render, screen } from '../../test/test-utils';
import userEvent from '@testing-library/user-event';
import { Tabs } from './tabs';

const mockTabs = [
  { id: 'tab1', label: 'Tab 1', content: 'Content 1' },
  { id: 'tab2', label: 'Tab 2', content: 'Content 2' },
  { id: 'tab3', label: 'Tab 3', content: 'Content 3' },
];

describe('Tabs', () => {
  it('renders all tabs', () => {
    render(<Tabs tabs={mockTabs} />);
    
    mockTabs.forEach(tab => {
      expect(screen.getByRole('tab', { name: tab.label })).toBeInTheDocument();
    });
  });

  it('shows first tab content by default', () => {
    render(<Tabs tabs={mockTabs} />);
    
    expect(screen.getByText('Content 1')).toBeVisible();
    expect(screen.queryByText('Content 2')).not.toBeVisible();
    expect(screen.queryByText('Content 3')).not.toBeVisible();
  });

  it('shows correct content when tab is clicked', async () => {
    render(<Tabs tabs={mockTabs} />);
    
    const secondTab = screen.getByRole('tab', { name: 'Tab 2' });
    await userEvent.click(secondTab);
    
    expect(screen.queryByText('Content 1')).not.toBeVisible();
    expect(screen.getByText('Content 2')).toBeVisible();
    expect(screen.queryByText('Content 3')).not.toBeVisible();
  });

  it('calls onChange when tab is clicked', async () => {
    const handleChange = vi.fn();
    render(<Tabs tabs={mockTabs} onChange={handleChange} />);
    
    const secondTab = screen.getByRole('tab', { name: 'Tab 2' });
    await userEvent.click(secondTab);
    
    expect(handleChange).toHaveBeenCalledWith('tab2');
  });

  it('respects defaultTab prop', () => {
    render(<Tabs tabs={mockTabs} defaultTab="tab2" />);
    
    expect(screen.queryByText('Content 1')).not.toBeVisible();
    expect(screen.getByText('Content 2')).toBeVisible();
    expect(screen.queryByText('Content 3')).not.toBeVisible();
  });
});