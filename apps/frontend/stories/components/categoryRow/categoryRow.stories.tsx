import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import CategoryRow from './categoryRow'; 
import category1 from '../../../src/images/category1.svg'; 
import category2 from '../../../src/images/category2.svg';
import category3 from '../../../src/images/category3.svg';
import category4 from '../../../src/images/category4.svg'; 
import category5 from '../../../src/images/category5.svg';
import category6 from '../../../src/images/category6.svg';
import category7 from '../../../src/images/category7.svg'; 
import category8 from '../../../src/images/category8.svg';

const meta: Meta<typeof CategoryRow> = {
  title: 'Components/CategoryRow',
  component: CategoryRow,
};

export default meta;

type Story = StoryObj<typeof CategoryRow>;

export const Default: Story = {
  args: {
    categories: [
      {
        imageURL: category1,
        productURL: 'https://example.com/product',
      },
      {
        imageURL: category2,
        productURL: 'https://example.com/product',
      },
      {
        imageURL: category3,
        productURL: 'https://example.com/product',
      },
      {
        imageURL: category4,
        productURL: 'https://example.com/product',
      },
      {
        imageURL: category5,
        productURL: 'https://example.com/product',
      },
      {
        imageURL: category8,
        productURL: 'https://example.com/product',
      },
      {
        imageURL: category7,
        productURL: 'https://example.com/product',
      },
      {
        imageURL: category6,
        productURL: 'https://example.com/product',
      },
    ],
  },
};
