// src/components/Banner/Banner.stories.tsx

import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Banner, { BannerProps } from './banner';
import banner from '../../../src/images/banner.jpg';

export default {
  title: 'Components/Banner',
  component: Banner,
  decorators: [
  ],
  argTypes: {
    image: {
      control: 'text',
      description: 'Background image URL or path',
    },
    title: {
      control: 'text',
      description: 'Title or sentence displayed on the banner',
    },
    buttonText: {
      control: 'text',
      description: 'Text displayed on the button',
    },
    buttonLink: {
      control: 'text',
      description: 'URL or route the button redirects to upon clicking',
    },
  },
} as Meta;

const Template: StoryFn<BannerProps> = (args) => <Banner {...args} />;

export const Default = Template.bind({});
Default.args = {
  image: banner,
  title: 'Sip in Style! Discover Our Unique Mug Collection Today.',
  buttonText: 'Shop Now',
  buttonLink: 'www.customer.com',
};


