// Button.stories.tsx
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Button } from './Button';

// Define the Meta for the Button component
const meta: Meta<typeof Button> = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    productURL: { control: 'text' },
  },
};

export default meta;

// Define a template using StoryFn
const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

// Define stories using the Template
export const Default = Template.bind({});
Default.args = {
  label: 'Show Now',
  onClick: action('Button Clicked'),
  href: 'https://www.example.com',
};
