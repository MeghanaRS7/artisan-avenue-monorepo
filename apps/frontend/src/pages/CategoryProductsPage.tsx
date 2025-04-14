import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import ProductCard from '../components/productCard/ProductCard';
import Banner from '../components/banner/Banner';
import CategoryRow from '../components/categoryRow/CategoryRow';
import ProductCarousel from '../components/productCarousel/ProductCarousel';
import mugsImage from '../images/mugs.svg';
import platesImage from '../images/plates.svg';
import heartIcon from '../images/heart.svg';
import bannerImage from '../images/banner.jpg';
import category1 from '../images/categories/category1.svg';
import category2 from '../images/categories/category2.svg';
import category3 from '../images/categories/category3.svg';
import category4 from '../images/categories/category4.svg';
import category5 from '../images/categories/category5.svg';
import category6 from '../images/categories/category6.svg';
import category7 from '../images/categories/category7.svg';
import category8 from '../images/categories/category8.svg';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #2c5282;
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const CategoryProductsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  const categoryRowData = [
    {
      imageURL: category1,
      productURL: '/category/1',
      title: "Pots"
    },
    {
      imageURL: category2,
      productURL: '/category/2',
      title: "Plates"
    },
    {
      imageURL: category3,
      productURL: '/category/3',
      title: "Dinnerware"
    },
    {
      imageURL: category4,
      productURL: '/category/4',
      title: "Baking"
    },
    {
      imageURL: category5,
      productURL: '/category/5',
      title: "Bowls"
    },
    {
      imageURL: category6,
      productURL: '/category/6',
      title: "Mugs"
    },
    {
      imageURL: category7,
      productURL: '/category/7',
      title: "Serving"
    },
    {
      imageURL: category8,
      productURL: '/category/8',
      title: "Accessories"
    },
  ];

  const categoryProducts = {
    '1': [
      {
        productImage: mugsImage,
        price: '29.99',
        likeCount: 120,
        offer: 15,
        heartIcon: heartIcon,
        addBtnLabel: 'Add to Cart',
        addBtnURL: '/cart',
      },
      {
        productImage: platesImage,
        price: '49.99',
        likeCount: 95,
        offer: 20,
        heartIcon: heartIcon,
        addBtnLabel: 'Add to Cart',
        addBtnURL: '/cart',
      }
    ],
    '2': [
      {
        productImage: platesImage,
        price: '39.99',
        likeCount: 85,
        offer: 10,
        heartIcon: heartIcon,
        addBtnLabel: 'Add to Cart',
        addBtnURL: '/cart',
      },
      {
        productImage: mugsImage,
        price: '24.99',
        likeCount: 120,
        offer: 15,
        heartIcon: heartIcon,
        addBtnLabel: 'Add to Cart',
        addBtnURL: '/cart',
      }
    ],
  };

  const featuredProducts = [
    {
      productImage: mugsImage,
      price: '29.99',
      likeCount: 120,
      offer: 15,
      heartIcon: heartIcon,
      addBtnLabel: 'Add to Cart',
      addBtnURL: '/cart',
    },
    {
      productImage: platesImage,
      price: '49.99',
      likeCount: 95,
      offer: 20,
      heartIcon: heartIcon,
      addBtnLabel: 'Add to Cart',
      addBtnURL: '/cart',
    }
  ];

  const saleProducts = [
    {
      productImage: mugsImage,
      price: '24.99',
      originalPrice: '29.99',
      likeCount: 150,
      offer: 20,
      heartIcon: heartIcon,
      addBtnLabel: 'Add to Cart',
      addBtnURL: '/cart',
    },
    {
      productImage: platesImage,
      price: '39.99',
      originalPrice: '49.99',
      likeCount: 120,
      offer: 20,
      heartIcon: heartIcon,
      addBtnLabel: 'Add to Cart',
      addBtnURL: '/cart',
    },
    {
      productImage: mugsImage,
      price: '22.99',
      originalPrice: '29.99',
      likeCount: 85,
      offer: 25,
      heartIcon: heartIcon,
      addBtnLabel: 'Add to Cart',
      addBtnURL: '/cart',
    }
  ];

  const products = categoryProducts[id as keyof typeof categoryProducts] || [];

  return (
    <Container>
      <Banner
        image={bannerImage}
        title="Discover Unique Handcrafted Pieces"
        buttonText="Shop All"
        buttonLink="/"
      />

      <CategoryRow categories={categoryRowData} />

      <Title>Category Products</Title>
      <ProductsGrid>
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </ProductsGrid>

      <ProductCarousel 
        title="Featured Products" 
        products={featuredProducts} 
      />

      <ProductCarousel 
        title="Special Offers" 
        products={saleProducts}
        showOriginalPrice={true}
      />
    </Container>
  );
};

export default CategoryProductsPage; 