
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { SearchBar } from './searchBar'; 

const meta: Meta<typeof SearchBar> = {
  title: 'Components/SearchBar',
  component: SearchBar,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

const Template: StoryFn<typeof SearchBar> = (args) => <SearchBar />;

export const Default = Template.bind({});
;
