import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { SearchBar } from '../searchBar/SearchBar';

interface HeaderProps {
  onSearch?: (query: string) => void;
  cartItemCount?: number;
}

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 4rem;
  background-color: white;
  width: 100%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.75rem;
  font-weight: bold;
  color: #292c2e;
  white-space: nowrap;
  letter-spacing: -0.5px;
  
  &:hover {
    color: #454b4e;
  }
`;

const IconsContainer = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

const IconLink = styled(Link)`
  color: #292c2e;
  text-decoration: none;
  position: relative;
  display: flex;
  align-items: center;
  transition: color 0.2s ease;

  &:hover {
    color: #454b4e;
  }

  svg {
    transition: transform 0.2s ease;
  }

  &:hover svg {
    transform: scale(1.1);
  }
`;

const CartCount = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: #ff4444;
  color: white;
  font-size: 0.75rem;
  padding: 2px 6px;
  border-radius: 12px;
  min-width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  box-shadow: 0 2px 4px rgba(255, 68, 68, 0.2);
`;

const Header: React.FC<HeaderProps> = ({ 
  onSearch,
  cartItemCount = 0
}) => {
  return (
    <HeaderContainer>
      <Logo to="/">Artisan Avenue</Logo>
      <SearchBar onSearch={onSearch} />
      <IconsContainer>
        <IconLink to="/account" title="My Account">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
          </svg>
        </IconLink>
        <IconLink to="/" title="Home">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            <polyline points="9 22 9 12 15 12 15 22"/>
          </svg>
        </IconLink>
        <IconLink to="/cart" title="Shopping Cart">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="9" cy="21" r="1"/>
            <circle cx="20" cy="21" r="1"/>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
          </svg>
          {cartItemCount > 0 && <CartCount>{cartItemCount}</CartCount>}
        </IconLink>
      </IconsContainer>
    </HeaderContainer>
  );
};

export default Header; 