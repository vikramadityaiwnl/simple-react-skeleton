import type { Meta, StoryObj } from '@storybook/react';
import Skeleton from './Skeleton';
import SkeletonImage from './SkeletonImage';
import SkeletonText from './SkeletonText';
import React from "react"

const meta = {
  title: 'Skeleton/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PropsOrder: Story = {
  args: { propsOrder: ['img', 'text', 'half-text'], style: { width: 300 } },
};

export const Children: Story = {
  args: { children: [<SkeletonImage profile />, <SkeletonText half />, <SkeletonText />], style: { width: 300 } },
};

export const Outline: Story = {
  args: { propsOrder: ['img', 'text', 'half-text'], outline: true, style: { width: 300 } },
};

export const Dark: Story = {
  args: { propsOrder: ['img', 'text', 'half-text'], dark: true, style: { width: 300 } },
};