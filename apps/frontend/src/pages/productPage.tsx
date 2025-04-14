import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { SearchBar } from '../components/searchBar/SearchBar';
import ProductCarousel from '../components/productCarousel/ProductCarousel';
import AutoRotatingCarousel from '../components/autoRotatingCarousel/AutoRotatingCarousel';
import mugsImage from '../images/mugs.svg';
import grid1Image from '../images/grid/grid1.svg';
import grid2Image from '../images/grid/grid2.svg';
import grid3Image from '../images/grid/grid3.svg';
import grid4Image from '../images/grid/grid4.jpg';
import grid5Image from '../images/grid/grid5.jpg';
import grid6Image from '../images/grid/grid6.jpg';
import heartIcon from '../images/heart.svg';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-bottom: 3rem;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ProductTitle = styled.h1`
  font-size: 2.5rem;
  color: #2c5282;
  margin: 0;
  font-weight: 700;
`;

const ProductPrice = styled.div`
  font-size: 1.75rem;
  font-weight: bold;
  color: #2c5282;
`;

const ProductDescription = styled.p`
  color: #4a5568;
  line-height: 1.8;
  font-size: 1.1rem;
`;

const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 1rem 0;
`;

const QuantityButton = styled.button`
  padding: 0.75rem 1.25rem;
  border: 1px solid #ddd;
  background-color: white;
  cursor: pointer;
  border-radius: 4px;
  font-size: 1.2rem;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #f0f0f0;
    transform: scale(1.05);
  }
`;

const AddToCartButton = styled.a`
  padding: 0.75rem 1.5rem;
  background-color: #2c5282;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  min-width: 120px;
  text-decoration: none;
  
  &:hover {
    background-color: #1a365d;
    transform: translateY(-2px);
  }

  &:disabled {
    background-color: #a0aec0;
    cursor: not-allowed;
    transform: none;
  }
`;

const ProductPage: React.FC = () => {
  const [quantity, setQuantity] = useState(1);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const navigate = useNavigate();

  const product = {
    id: 1,
    name: "Handcrafted Ceramic Mug",
    price: 29.99,
    description: "Beautiful handcrafted ceramic mug with unique patterns. Perfect for your morning coffee or tea. Made with high-quality materials and attention to detail. Each piece is carefully crafted by local artisans, ensuring a unique and personal touch to your daily routine.",
    image: mugsImage,
  };

  const featuredItems = [
    {
      image: grid1Image,
      categoryTitle: "Featured Vase",
      productUrl: "/product/1"
    },
    {
      image: grid2Image,
      categoryTitle: "Premium Plates",
      productUrl: "/product/2"
    },
    {
      image: grid3Image,
      categoryTitle: "Artisan Bowls",
      productUrl: "/product/3"
    },
    {
      image: grid4Image,
      categoryTitle: "Wall Art",
      productUrl: "/product/4"
    },
    {
      image: grid5Image,
      categoryTitle: "Tea Set",
      productUrl: "/product/5"
    },
    {
      image: grid6Image,
      categoryTitle: "Candle Holders",
      productUrl: "/product/6"
    }
  ];

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsAddingToCart(true);
    
    // Simulate API call
    setTimeout(() => {
      // Add to cart logic would go here
      console.log(`Added ${quantity} ${product.name} to cart`);
      setIsAddingToCart(false);
      navigate('/cart');
    }, 1000);
  };

  const relatedProducts = [
    {
      productImage: grid1Image,
      price: '49.99',
      originalPrice: '62.49',
      likeCount: 95,
      offer: 20,
      heartIcon: heartIcon,
      addBtnLabel: 'Add to Cart',
      addBtnURL: '/cart',
      description: 'Elegant ceramic vase with intricate patterns'
    },
    {
      productImage: grid2Image,
      price: '34.99',
      originalPrice: '41.16',
      likeCount: 120,
      offer: 15,
      heartIcon: heartIcon,
      addBtnLabel: 'Add to Cart',
      addBtnURL: '/cart',
      description: 'Hand-painted decorative plate set'
    },
    {
      productImage: grid3Image,
      price: '39.99',
      originalPrice: '44.43',
      likeCount: 85,
      offer: 10,
      heartIcon: heartIcon,
      addBtnLabel: 'Add to Cart',
      addBtnURL: '/cart',
      description: 'Artisan-crafted serving bowl'
    },
    {
      productImage: grid4Image,
      price: '44.99',
      originalPrice: '59.99',
      likeCount: 110,
      offer: 25,
      heartIcon: heartIcon,
      addBtnLabel: 'Add to Cart',
      addBtnURL: '/cart',
      description: 'Unique geometric wall art'
    },
    {
      productImage: grid5Image,
      price: '29.99',
      originalPrice: '31.57',
      likeCount: 75,
      offer: 5,
      heartIcon: heartIcon,
      addBtnLabel: 'Add to Cart',
      addBtnURL: '/cart',
      description: 'Handmade ceramic teapot'
    },
    {
      productImage: grid6Image,
      price: '54.99',
      originalPrice: '78.56',
      likeCount: 130,
      offer: 30,
      heartIcon: heartIcon,
      addBtnLabel: 'Add to Cart',
      addBtnURL: '/cart',
      description: 'Luxury candle holder set'
    },
    {
      productImage: mugsImage,
      price: '64.99',
      originalPrice: '99.98',
      likeCount: 150,
      offer: 35,
      heartIcon: heartIcon,
      addBtnLabel: 'Add to Cart',
      addBtnURL: '/cart',
      description: 'Premium ceramic coffee set'
    }
  ];

  const handleQuantityChange = (change: number) => {
    setQuantity(prev => Math.max(1, prev + change));
  };

  return (
    <PageContainer>
      <SearchBar />
      
      <AutoRotatingCarousel 
        title="Featured Items" 
        slides={featuredItems}
      />
      
      <ProductContainer>
        <ProductImage src={product.image} alt={product.name} />
        
        <ProductDetails>
          <ProductTitle>{product.name}</ProductTitle>
          <ProductPrice>${product.price.toFixed(2)}</ProductPrice>
          <ProductDescription>{product.description}</ProductDescription>
          
          <QuantityControl>
            <QuantityButton onClick={() => handleQuantityChange(-1)}>-</QuantityButton>
            <span>{quantity}</span>
            <QuantityButton onClick={() => handleQuantityChange(1)}>+</QuantityButton>
          </QuantityControl>
          
          <AddToCartButton 
            href="/cart"
            className="sc-jMsorb jeQUIp"
            data-discover="true"
            onClick={handleAddToCart}
          >
            {isAddingToCart ? 'Adding...' : 'Add to Cart'}
          </AddToCartButton>
        </ProductDetails>
      </ProductContainer>

      <ProductCarousel 
        title="You May Also Like" 
        products={relatedProducts}
        showOriginalPrice={true}
      />
    </PageContainer>
  );
};

export default ProductPage; 