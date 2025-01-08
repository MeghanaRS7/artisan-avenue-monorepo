import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import searchIconPng from '../../../src/asset/Shape.png';


/* Main container (the "frame") */
const SearchBarContainer = styled.div`
  position: absolute;
  width: 467px;
  height: 43px;
  top: 15px;
  left: 34px;
  border-radius: 47px;
  background-color: #fff;
  border: 1px solid #ccc;
`;

/* Dark background "circle" behind the icon */
const CircleBackground = styled.div`
  position: absolute;
  width: 45px;
  height: 37px;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  background: #5c5955;
  border-radius: 22px;
  z-index: 1;
`;

/* The icon within the circle */
const IconWithinCircle = styled.img`
  position: absolute;
  width: 32px;
  height: 30px;
  left: 26px;
  top: 50%;
  transform: translateY(-50%);
  opacity: 1;
  z-index: 2;
`;

/*
  The label "Search..." is placed exactly where the typed text
  will appear. We'll hide it when the user is typing or focusing.
*/
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

  /*
    If hiddenLabel is true, we hide the label.
    Use visibility: hidden (or display: none) if you prefer.
  */
  visibility: ${(props) => (props.hiddenLabel ? 'hidden' : 'visible')};

  transition: visibility 0.2s;
  z-index: 3;
`;

/*
  The input is absolutely positioned in the same spot as the label.
  We'll show typed text at the same place where "Search..." would be.
*/
const SearchInput = styled.input`
  position: absolute;
  left: 78px;
  top: 50%;
  transform: translateY(-50%);
  /* Give enough width for user to type */
  width: 300px;
  
  font-family: 'Lora', serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 26px;
  color: #867676;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.18);

  /* No border for a clean look; remove if you want a border */
  border: none;
  background: transparent;
  outline: none;

  /*
    If you want the typed text or the caret to be visible,
    ensure the background or container behind it is visible 
    and not fully opaque. 
  */
  z-index: 3;
`;

export const SearchBar: React.FC = () => {
  const [value, setValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  /*
    We hide the label when:
      - The input is focused OR
      - There's some text in the input
  */
  const hideLabel = isFocused || value.length > 0;

  return (
    <SearchBarContainer>
      <CircleBackground />
      <IconWithinCircle src={searchIconPng} alt="Search Icon" />

      {/* Label is hidden if the input is focused or has text */}
      <SearchLabel hiddenLabel={hideLabel}>Search...</SearchLabel>

      {/* The input, in the same position as the label */}
      <SearchInput
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </SearchBarContainer>
  );
};
