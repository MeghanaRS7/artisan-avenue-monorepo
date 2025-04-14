import React from 'react';
import styled from 'styled-components';
import ProductCard from '../productCard/ProductCard';

export interface ProductCarouselProps {
  title: string;
  products: Array<{
    productImage: string;
    price: string;
    originalPrice?: string;
    likeCount?: number;
    offer?: number;
    heartIcon?: string;
    addBtnLabel: string;
    addBtnURL: string;
  }>;
  showOriginalPrice?: boolean;
}

const CarouselContainer = styled.div`
  margin: 2rem 0;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #2c5282;
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  padding: 1rem;
`;

const ProductCarousel: React.FC<ProductCarouselProps> = ({
  title,
  products,
  showOriginalPrice = false,
}) => {
  return (
    <CarouselContainer>
      <Title>{title}</Title>
      <ProductsGrid>
        {products.map((product, index) => (
          <ProductCard
            key={index}
            {...product}
            showOriginalPrice={showOriginalPrice}
          />
        ))}
      </ProductsGrid>
    </CarouselContainer>
  );
};

export default ProductCarousel; 