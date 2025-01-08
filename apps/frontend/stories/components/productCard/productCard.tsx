// src/components/ProductCard/ProductCard.tsx

import React, { useState } from "react";
import { Button } from "../button/Button";
import styled from "styled-components";

export interface ProductCardProps {
  productImage: string;
  price: string;
  likeCount?: number;
  offer?: number;
  heartIcon?: string;
  addBtnLabel: string;
  addBtnURL: string;
}

const CardContainer = styled.div`
  width: 270px;
  height: 340px;
  background-color: #edecec;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-row: 1;
  width: 100%;
  height: 300px;
  padding: 15px 15px 0px 15px;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;

  &:hover .overlay {
    opacity: 1;
    pointer-events: auto;
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%; 
  object-fit: cover;
  border-radius: 4px;
`;

const OfferBadge = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: #ff4757;
  color: #fff;
  padding: 5px 10px;
  border-radius: 50px;
  font-size: 14px;
  font-weight: bold;
`;

const Footer = styled.div`
  width: 100%;
  height: 45px; 
  padding: 10px 15px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Price = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #2f3542;
`;

const Likes = styled.div<{ clickable: boolean }>`
  display: flex;
  align-items: center;
  font-size: 18px;
  width: 100%
  font-weight: bold;
  color: #2f3542;
  cursor: ${(props) => (props.clickable ? "pointer" : "default")};

  img {
    margin: 0px 0px 6px 2px;
    width: 20px;
    height: 20px;
  }
`;

const BlurredOverlay = styled.div`

  position: absolute;
  bottom: 0;
  width: 213px;
  background: #ffffff4d;
  backdrop-filter: blur(2px);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0; 
  transition: opacity 0.3s ease;
  pointer-events: none;
`;

const ProductCard: React.FC<ProductCardProps> = ({
  productImage,
  price,
  likeCount = 0, 
  offer,
  heartIcon,
  addBtnLabel,
  addBtnURL,
}) => {
  const [likes, setLikes] = useState(likeCount);
  
  const handleLike = () => {
    setLikes((prev) => prev + 1);
  };
  
  return (
    <CardContainer>
      <ImageWrapper>
        <ProductImage src={productImage} alt="Product" />
        {offer && <OfferBadge>{offer}%</OfferBadge>}
        <BlurredOverlay className="overlay">
          <Likes clickable onClick={handleLike} aria-label="Like this product">
            {likes} <img src={heartIcon} alt="Like" />
          </Likes>
        </BlurredOverlay>
      </ImageWrapper>
      <Footer>
        <Price>${price}</Price>
        <Button label={addBtnLabel} productURL={addBtnURL} />
      </Footer>
    </CardContainer>
  );
};

export default ProductCard;
