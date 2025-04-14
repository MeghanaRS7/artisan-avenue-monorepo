import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FiShoppingBag } from 'react-icons/fi';
import SearchBar from './SearchBar';

const HeaderContainer = styled.header`
  background-color: white;
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: #2c5282;
  text-decoration: none;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: #333;
  text-decoration: none;
  font-weight: 500;
  
  &:hover {
    color: #2c5282;
  }
`;

const CartIcon = styled(Link)`
  position: relative;
  color: #333;
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 50%;
  transition: all 0.3s ease;

  &:hover {
    background-color: #f0f4f8;
    color: #2c5282;
  }
`;

const CartCount = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: #2c5282;
  color: white;
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 0.75rem;
  font-weight: 600;
`;

const StyledShoppingBag = styled(FiShoppingBag)`
  font-size: 1.5rem;
`;

const Header: React.FC = () => {
  const cartItemCount = 0; // This would come from your cart context/state

  return (
    <HeaderContainer>
      <NavContainer>
        <Logo to="/">Artisan Avenue</Logo>
        <NavLinks>
          <SearchBar />
          <CartIcon to="/cart">
            <StyledShoppingBag />
            {cartItemCount > 0 && <CartCount>{cartItemCount}</CartCount>}
          </CartIcon>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About Us</NavLink>
        </NavLinks>
      </NavContainer>
    </HeaderContainer>
  );
};

export default Header; 