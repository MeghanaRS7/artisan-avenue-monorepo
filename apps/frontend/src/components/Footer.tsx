import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterContainer = styled.footer`
  background-color: #2c5282;
  color: white;
  padding: 2rem;
  margin-top: auto;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FooterTitle = styled.h3`
  font-size: 1.2rem;
  margin: 0;
`;

const FooterLink = styled(Link)`
  color: white;
  text-decoration: none;
  opacity: 0.8;
  
  &:hover {
    opacity: 1;
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>Shop</FooterTitle>
          <FooterLink to="/categories">Categories</FooterLink>
          <FooterLink to="/new-arrivals">New Arrivals</FooterLink>
          <FooterLink to="/best-sellers">Best Sellers</FooterLink>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>About</FooterTitle>
          <FooterLink to="/about">Our Story</FooterLink>
          <FooterLink to="/artisans">Our Artisans</FooterLink>
          <FooterLink to="/sustainability">Sustainability</FooterLink>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Help</FooterTitle>
          <FooterLink to="/faq">FAQ</FooterLink>
          <FooterLink to="/shipping">Shipping</FooterLink>
          <FooterLink to="/returns">Returns</FooterLink>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Connect</FooterTitle>
          <FooterLink to="/contact">Contact Us</FooterLink>
          <FooterLink to="/newsletter">Newsletter</FooterLink>
          <FooterLink to="/social">Social Media</FooterLink>
        </FooterSection>
      </FooterContent>
      
      <Copyright>
        © {new Date().getFullYear()} Artisan Avenue. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer; 