// SearchBar.stories.tsx

import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { SearchBar } from './searchBar'; // Adjust path to wherever your component is

const meta: Meta<typeof SearchBar> = {
  title: 'Example/SearchBar',
  component: SearchBar,
  // If you want to center the component, you can add:
  parameters: {
    layout: 'centered',
  },
  // If you’re using the autodocs feature, you can add:
  tags: ['autodocs'],
};

export default meta;

const Template: StoryFn<typeof SearchBar> = (args) => <SearchBar />;

export const Default = Template.bind({});
;
