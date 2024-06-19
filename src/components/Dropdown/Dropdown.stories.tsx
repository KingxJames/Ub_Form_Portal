// Dropdown.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import  { Dropdown } from './Dropdown';

const meta: Meta<typeof Dropdown> = {
  title: 'components/Dropdown', 
  component: Dropdown,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;
  

export const Default: Story = {
    args: {
      title: 'Faculty',
    },
  };