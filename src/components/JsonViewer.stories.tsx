import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { JsonViewer } from './JsonViewer';

const meta = {
  title: 'Components/JsonViewer',
  component: JsonViewer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof JsonViewer>;

export default meta;
type Story = StoryObj<typeof meta>;

const basicData = {
  name: 'John Doe',
  age: 30,
  email: 'john@example.com',
};

const complexData = {
  user: {
    id: 1,
    name: 'Jane Smith',
    email: 'jane@example.com',
    address: {
      street: '123 Main St',
      city: 'San Francisco',
      country: 'USA',
    },
    tags: ['developer', 'designer', 'manager'],
  },
  isActive: true,
  createdAt: '2024-01-15',
};

const arrayData = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
];

export const Basic: Story = {
  args: {
    data: basicData,
  },
};

export const Complex: Story = {
  args: {
    data: complexData,
    defaultExpanded: true,
  },
};

export const Array: Story = {
  args: {
    data: arrayData,
    defaultExpanded: true,
  },
};

export const Collapsed: Story = {
  args: {
    data: complexData,
    defaultExpanded: false,
  },
};
