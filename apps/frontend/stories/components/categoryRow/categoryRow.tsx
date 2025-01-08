import React, { useState } from 'react';
import styled, { css } from 'styled-components';

interface Category {
  imageURL: string;
  productURL: string;
}

interface CategoryRowProps {
  categories: Category[];
}

const StyledCategoryRowFrame = styled.div`
  display: flex;
  background-color: #F2EEEE;
  justify-content: space-around;
  align-items: center;
  padding: 20px 0;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const CategoryLink = styled.a<{ selected: boolean }>`
  position: relative;
  display: inline-block;
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;

  ${props => props.selected && css`
    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 2px solid #31B2CC;
      box-sizing: border-box;
      border-radius: 8px;
    }
  `}

  &:hover {
    opacity: 0.8;
  }
`;

const CategoryImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;
`;

const CategoryRow: React.FC<CategoryRowProps> = ({ categories }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategoryClick = (category: Category) => {
    setSelectedCategory(category.imageURL);
    window.location.href = category.productURL;
  };

  return (
    <StyledCategoryRowFrame>
      {categories.map((category, index) => (
        <CategoryLink
          key={index}
          href={category.productURL}
          selected={selectedCategory === category.imageURL}
          onClick={() => handleCategoryClick(category)}
        >
          <CategoryImage src={category.imageURL} alt={`Category ${index + 1}`} />
        </CategoryLink>
      ))}
    </StyledCategoryRowFrame>
  );
};

export default CategoryRow;
