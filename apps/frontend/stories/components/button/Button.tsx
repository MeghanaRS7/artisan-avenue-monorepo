import React, { useState } from 'react';
import styled, { css } from 'styled-components';


interface ButtonProps {
 label: string;
 productURL?: string;
}


const StyledButton = styled.a<{ isClicked: boolean;}>`
 display: inline-block;
 text-decoration: none;
 padding: 0.5em 1em;
 border-radius: 20px;
 background-color: 'white';
 color: ${({ isClicked }) => (isClicked ? 'white' : 'black')};
 border: 2px solid #1ea7fd;
 cursor: pointer;
 transition: background-color 0.3s, color 0.3s;
 font-size: 0.8rem;

 ${({ isClicked }) =>
   isClicked &&
   css`
     background-color: blue;
     color: white;
   `}

 &:hover {
   background-color: #1ea7fd;
   color: white;
 }
`;

export const Button: React.FC<ButtonProps> = ({ label, productURL }) => {
 const [isClicked, setIsClicked] = useState(false);


 const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
   setIsClicked(true);
 };


 return (
   <StyledButton
     href={productURL}
     onClick={handleClick}
     isClicked={isClicked}
   >
     {label}
   </StyledButton>
 );
};
