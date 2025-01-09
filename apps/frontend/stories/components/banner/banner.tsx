import React from 'react';
import styled from 'styled-components';
import { Button } from "../button/Button";

export interface BannerProps {
  image: string;
  title: string;
  buttonText: string;
  buttonLink: string;
}

const BannerContainer = styled.div<{ image: string }>`
  width: 100%;
  height: 200px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
  }
`;

const Content = styled.div`
  position: relative;
  color: #fff;
  right: 10%;
  text-align: center;
  z-index: 1;
  padding: 0 20px; /* Responsive padding */
`;

const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 20px;
  text-transform: capitalize; 
`;

const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  
  @media (max-width: 768px) {
    top: 15px;
    right: 15px;
  }
`;

const Banner: React.FC<BannerProps> = ({ image, title, buttonText, buttonLink }) => {

  return (
    <BannerContainer image={image}>
      <Content>
        <Title>{title}</Title>
      </Content>
      <ButtonWrapper>
        <Button label={buttonText} productURL={buttonLink}>
        </Button>
      </ButtonWrapper>
    </BannerContainer>
  );
};

export default Banner;
