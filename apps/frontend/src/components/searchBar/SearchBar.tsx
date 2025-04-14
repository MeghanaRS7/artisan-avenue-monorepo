import React, { useState } from 'react';
import styled from 'styled-components';

/* Main container (the "frame") */
const SearchBarContainer = styled.div`
  position: relative;
  width: 467px;
  height: 43px;
  border-radius: 47px;
  background-color: #fff;
  border: 1px solid #e0e0e0;
  transition: all 0.2s ease;

  &:focus-within {
    border-color: #2c5282;
    box-shadow: 0 2px 8px rgba(44, 82, 130, 0.1);
  }
`;

/* Dark background "circle" behind the icon */
const CircleBackground = styled.div`
  position: absolute;
  width: 45px;
  height: 37px;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  background: #2c5282;
  border-radius: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  transition: all 0.2s ease;

  &:hover {
    background: #1a365d;
    transform: translateY(-50%) scale(1.05);
  }
`;

/* The icon within the circle */
const SearchIcon = styled.img`
  width: 20px;
  height: 20px;
  filter: brightness(0) invert(1);
  transition: all 0.2s ease;
`;

const SearchLabel = styled.span<{ hiddenLabel: boolean }>`
  position: absolute;
  left: 78px;
  top: 50%;
  transform: translateY(-50%);
  font-family: 'Lora', serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 26px;
  color: #867676;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.18);
  visibility: ${(props) => (props.hiddenLabel ? 'hidden' : 'visible')};
  transition: visibility 0.2s;
  z-index: 3;
`;

const SearchInput = styled.input`
  position: absolute;
  left: 78px;
  top: 50%;
  transform: translateY(-50%);
  width: 300px;
  font-family: 'Lora', serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 26px;
  color: #867676;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.18);
  border: none;
  background: transparent;
  outline: none;
  z-index: 3;
`;

interface SearchBarProps {
  onSearch?: (query: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [value, setValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    onSearch?.(newValue);
  };

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const hideLabel = isFocused || value.length > 0;

  return (
    <SearchBarContainer>
      <CircleBackground>
        <SearchIcon 
          src="/images/Shape.png" 
          alt="Search" 
          className="sc-kNNXoD fEhoMA"
        />
      </CircleBackground>

      <SearchLabel hiddenLabel={hideLabel}>Search...</SearchLabel>

      <SearchInput
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        aria-label="Search"
      />
    </SearchBarContainer>
  );
}; 