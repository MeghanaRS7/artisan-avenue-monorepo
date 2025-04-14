import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CarouselContainer = styled.div`
  margin: 2rem 0;
`;

const CarouselTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const CarouselGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
`;

const ProductCard = styled.div`
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProductInfo = styled.div`
  padding: 1rem;
`;

const ProductPrice = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: #2c5282;
  margin-bottom: 0.5rem;
`;

const ProductActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
`;

const LikeButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: none;
  cursor: pointer;
  color: #666;
  
  &:hover {
    color: #2c5282;
  }
`;

const AddToCartButton = styled(Link)`
  padding: 0.5rem 1rem;
  background-color: #2c5282;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-size: 0.9rem;
  
  &:hover {
    background-color: #1a365d;
  }
`;

interface Product {
  productImage: string;
  price: string;
  likeCount: number;
  offer: number;
  heartIcon: string;
  addBtnLabel: string;
  addBtnURL: string;
}

interface ProductCarouselProps {
  title: string;
  products: Product[];
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ title, products }) => {
  return (
    <CarouselContainer>
      <CarouselTitle>{title}</CarouselTitle>
      <CarouselGrid>
        {products.map((product, index) => (
          <ProductCard key={index}>
            <ProductImage src={product.productImage} alt={`Product ${index + 1}`} />
            <ProductInfo>
              <ProductPrice>${product.price}</ProductPrice>
              <ProductActions>
                <LikeButton>
                  <img src={product.heartIcon} alt="Like" width="16" height="16" />
                  <span>{product.likeCount}</span>
                </LikeButton>
                <AddToCartButton to={product.addBtnURL}>
                  {product.addBtnLabel}
                </AddToCartButton>
              </ProductActions>
            </ProductInfo>
          </ProductCard>
        ))}
      </CarouselGrid>
    </CarouselContainer>
  );
};

export default ProductCarousel; 