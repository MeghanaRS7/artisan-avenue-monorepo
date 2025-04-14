import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import searchIconPng from '../asset/Shape.png';

const SearchBarContainer = styled.div`
  position: relative;
  width: 467px;
  height: 43px;
  border-radius: 47px;
  background-color: #fff;
  border: 1px solid #ccc;
`;

const CircleBackground = styled.div`
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
  background-color: #f0f0f0;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchIcon = styled.img`
  width: 12px;
  height: 12px;
`;

const SearchInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 0 50px;
  border: none;
  border-radius: 47px;
  background-color: transparent;
  font-size: 16px;
  outline: none;
  
  &:focus {
    border-color: #2c5282;
  }
`;

export const SearchBar: React.FC = () => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Handle search input changes here
    console.log(e.target.value);
  };

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <SearchBarContainer>
      <CircleBackground>
        <SearchIcon src={searchIconPng} alt="Search" />
      </CircleBackground>
      <SearchInput
        ref={inputRef}
        type="text"
        placeholder="Search products..."
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </SearchBarContainer>
  );
};

export default SearchBar; 