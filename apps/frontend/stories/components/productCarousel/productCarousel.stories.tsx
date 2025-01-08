import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ProductCarousel from './productCarousel';
import { ProductCardProps } from '../productCard/productCard';
import heart from '../../../src/images/heart.svg';
import product1 from '../../../src/images/products/product1.svg';
import product2 from '../../../src/images/products/product2.svg';
import product3 from '../../../src/images/products/product3.svg';
import product4 from '../../../src/images/products/product4.svg';
import product5 from '../../../src/images/products/product5.svg';
import product6 from '../../../src/images/products/product6.svg';
import product7 from '../../../src/images/products/product7.svg';
import product8 from '../../../src/images/products/product8.svg';


const sampleProducts: ProductCardProps[] = [
  {
    productImage: product1,
    price: '29.99',
    likeCount: 120,
    offer: 10,
    heartIcon: heart,
    addBtnLabel: 'Add to Cart',
    addBtnURL: 'https://www.example.com/add-to-cart',
  },
  {
    productImage: product2,
    price: '19.99',
    likeCount: 250,
    heartIcon: heart,
    addBtnLabel: 'Add to Cart',
    addBtnURL: 'https://www.example.com/buy-now',
  },
  {
    productImage: product3,
    price: '39.99',
    likeCount: 150,
    offer: 15,
    heartIcon: heart,
    addBtnLabel: 'Add to Cart',
    addBtnURL: 'https://www.example.com/wishlist',
  },
  {
    productImage: product4,
    price: '49.99',
    likeCount: 300,
    offer: 5,
    heartIcon: heart,
    addBtnLabel: 'Add to Cart',
    addBtnURL: 'https://www.example.com/add-to-cart',
  },
  {
    productImage: product5,
    price: '59.99',
    heartIcon: heart,
    addBtnLabel: 'Add to Cart',
    addBtnURL: 'https://www.example.com/buy-now',
  },
  {
    productImage: product6,
    price: '39.99',
    likeCount: 150,
    offer: 15,
    heartIcon: heart,
    addBtnLabel: 'Add to Cart',
    addBtnURL: 'https://www.example.com/wishlist',
  },
  {
    productImage: product7,
    price: '89.99',
    offer: 20,
    heartIcon: heart,
    addBtnLabel: 'Add to Cart',
    addBtnURL: 'https://www.example.com/limited-offer',
  },
  {
    productImage: product8,
    price: '99.99',
    likeCount: 600,
    heartIcon: heart,
    addBtnLabel: 'Add to Cart',
    addBtnURL: 'https://www.example.com/best-deal',
  },
];

export default {
  title: 'Components/ProductCarousel',
  component: ProductCarousel,
  args: {
    title: 'Featured Products', // Default title
    products: sampleProducts,    // Default products
  },
  argTypes: {
    title: {
      control: 'text',
      description: 'Title of the carousel',
    },
    products: {
      control: 'object',
      description: 'Array of product objects',
    },
  },
} as Meta<typeof ProductCarousel>;

const Template: StoryFn<typeof ProductCarousel> = (args) => <ProductCarousel {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Featured Products',
  products: sampleProducts,
};

