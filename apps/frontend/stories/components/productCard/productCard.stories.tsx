// ProductCard.stories.tsx

import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ProductCard, { ProductCardProps } from './ProductCard';
import heart from '../../../src/images/heart.svg';
import plates from '../../../src/images/plates.svg';
import mugs from '../../../src/images/mugs.svg';


export default {
  title: 'Components/ProductCard',
  component: ProductCard,
  argTypes: {
    offer: {
      control: {
        type: 'number',
        min: 0,
        max: 100,
      },
      description: 'Percentage off offer',
    },
    likeCount: {
      control: {
        type: 'number',
        min: 0,
      },
      description: 'Number of likes',
    },
    price: {
      control: 'text',
      description: 'Product price',
    },
    image: {
      control: 'text',
      description: 'URL of the product image',
    },
  },
} as Meta;

const Template: StoryFn<ProductCardProps> = (args) => <ProductCard {...args} />;

// Default Story
export const Default = Template.bind({});
Default.args = {
  productImage: plates,
  price: '29.99',
  likeCount: 120,
  heartIcon: heart,
  addBtnLabel: "Add To Cart",
  addBtnURL: "www.example.com",
};

// With Offer Story
export const WithOffer = Template.bind({});
WithOffer.args = {
  productImage: mugs,
  price: '19.99',
  likeCount: 250,
  heartIcon: heart,
  offer: 30, // 30% OFF
  addBtnLabel: "Add o Cart",
  addBtnURL: "www.example.com",
};
