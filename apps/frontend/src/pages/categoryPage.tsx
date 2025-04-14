import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ProductCarousel from '../components/ProductCarousel';
import AutoRotatingCarousel from '../components/autoRotatingCarousel/AutoRotatingCarousel';
import Banner from '../components/banner/Banner';
import CategoryRow from '../components/categoryRow/CategoryRow';

// Import images
import grid1 from '../images/grid/grid1.svg';
import grid2 from '../images/grid/grid2.svg';
import grid3 from '../images/grid/grid3.svg';
import grid4 from '../images/grid/grid4.jpg';
import grid5 from '../images/grid/grid5.jpg';
import grid6 from '../images/grid/grid6.jpg';
import category1 from '../images/categories/category1.svg';
import category2 from '../images/categories/category2.svg';
import category3 from '../images/categories/category3.svg';
import category4 from '../images/categories/category4.svg';
import category5 from '../images/categories/category5.svg';
import category6 from '../images/categories/category6.svg';
import category7 from '../images/categories/category7.svg';
import category8 from '../images/categories/category8.svg';
import bannerImage from '../images/banner.jpg';
import mugsImage from '../images/mugs.svg';
import platesImage from '../images/plates.svg';
import heartIcon from '../images/heart.svg';

const CategoryContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const CategoryTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const CategoryCard = styled(Link)`
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-4px);
  }
`;

const CategoryImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CategoryInfo = styled.div`
  padding: 1rem;
`;

const CategoryName = styled.h2`
  font-size: 1.2rem;
  margin: 0 0 0.5rem 0;
`;

const CategoryDescription = styled.p`
  color: #666;
  margin: 0;
`;

const CategoryPage: React.FC = () => {
  const [cart, setCart] = useState<CarouselSlide[]>([]);

  const handleAddToCart = (product: CarouselSlide) => {
    setCart(prevCart => [...prevCart, product]);
    // You can also add a notification or toast here
  };

  const categories = [
    {
      id: 1,
      title: "Pots",
      image: grid1,
      description: "Discover our collection of handcrafted pots",
    },
    {
      id: 2,
      title: "Plates",
      image: grid2,
      description: "Explore our unique plate designs",
    },
    {
      id: 3,
      title: "Dinnerware",
      image: grid3,
      description: "Complete your table setting with our dinnerware",
    },
    {
      id: 4,
      title: "Baking",
      image: grid4,
      description: "Find the perfect bakeware for your kitchen",
    },
    {
      id: 5,
      title: "Bowls",
      image: grid5,
      description: "Browse our selection of artisanal bowls",
    },
    {
      id: 6,
      title: "Mugs",
      image: grid6,
      description: "Start your day with our unique mugs",
    },
  ];

  const autoRotatingSlides = categories.map(category => ({
    image: category.image,
    categoryTitle: category.title,
    link: `/category/${category.id}`,
    price: category.id * 29.99
  }));

  const categoryRowData = [
    {
      imageURL: category1,
      productURL: '/category/1',
      title: "Pots"
    },
    {
      imageURL: category2,
      productURL: '/category/2',
      title: "Plates"
    },
    {
      imageURL: category3,
      productURL: '/category/3',
      title: "Dinnerware"
    },
    {
      imageURL: category4,
      productURL: '/category/4',
      title: "Baking"
    },
    {
      imageURL: category5,
      productURL: '/category/5',
      title: "Bowls"
    },
    {
      imageURL: category6,
      productURL: '/category/6',
      title: "Mugs"
    },
    {
      imageURL: category7,
      productURL: '/category/7',
      title: "Serving"
    },
    {
      imageURL: category8,
      productURL: '/category/8',
      title: "Accessories"
    },
  ];

  const featuredProducts = [
    {
      productImage: mugsImage,
      price: '29.99',
      likeCount: 120,
      offer: 15,
      heartIcon: heartIcon,
      addBtnLabel: 'Add to Cart',
      addBtnURL: '/cart',
    },
    {
      productImage: platesImage,
      price: '49.99',
      likeCount: 95,
      offer: 20,
      heartIcon: heartIcon,
      addBtnLabel: 'Add to Cart',
      addBtnURL: '/cart',
    }
  ];

  const saleProducts = [
    {
      productImage: mugsImage,
      price: '24.99',
      originalPrice: '29.99',
      likeCount: 150,
      offer: 20,
      heartIcon: heartIcon,
      addBtnLabel: 'Add to Cart',
      addBtnURL: '/cart',
    },
    {
      productImage: platesImage,
      price: '39.99',
      originalPrice: '49.99',
      likeCount: 120,
      offer: 20,
      heartIcon: heartIcon,
      addBtnLabel: 'Add to Cart',
      addBtnURL: '/cart',
    },
    {
      productImage: mugsImage,
      price: '22.99',
      originalPrice: '29.99',
      likeCount: 85,
      offer: 25,
      heartIcon: heartIcon,
      addBtnLabel: 'Add to Cart',
      addBtnURL: '/cart',
    }
  ];

  return (
    <CategoryContainer>
      <Banner
        image={bannerImage}
        title="Sip in Style! Discover Our Unique Mug Collection Today."
        buttonText="Shop Now"
        buttonLink="/category/6"
      />

      <AutoRotatingCarousel
        title="This Week's Special"
        slides={autoRotatingSlides}
        onAddToCart={handleAddToCart}
      />

      <ProductCarousel 
        title="Special Offers" 
        products={saleProducts}
        showOriginalPrice={true}
      />

      <CategoryTitle>Shop Categories</CategoryTitle>
      <CategoryGrid>
        {categories.map((category) => (
          <CategoryCard key={category.id} to={`/category/${category.id}`}>
            <CategoryImage src={category.image} alt={category.title} />
            <CategoryInfo>
              <CategoryName>{category.title}</CategoryName>
              <CategoryDescription>{category.description}</CategoryDescription>
            </CategoryInfo>
          </CategoryCard>
        ))}
      </CategoryGrid>

      <ProductCarousel 
        title="Featured Products" 
        products={featuredProducts} 
      />
    </CategoryContainer>
  );
};

export default CategoryPage; 