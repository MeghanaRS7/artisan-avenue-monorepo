import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'; 
import 'swiper/css';

export interface CarouselSlide {
  image: string;
  categoryTitle: string;
  productUrl?: string;
  price: number;
}

interface AutoRotatingCarouselProps {
  title: string;
  slides: CarouselSlide[];
  onAddToCart?: (product: CarouselSlide) => void;
}

const CarouselContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 40px 0;
  background-color: #f9f9f9; 
`;

const CarouselTitle = styled.h2`
  text-align: center;
  font-size: 28px;
  color: #2f3542;
  margin-bottom: 30px;
`;

const StyledSwiper = styled(Swiper)`
  width: 100%;
  height: 350px; 
  
  .swiper-pagination-bullet-active {
    background-color: #2ed573;
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const SlideContainer = styled.a<{ isLink: boolean }>`
  position: relative;
  width: 270px;
  height: 330px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  text-decoration: none; 
  cursor: ${(props) => (props.isLink ? 'pointer' : 'default')};

  &:hover {
    transform: scale(1.05);
  }
`;

const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const SlideTitle = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 0.5rem;
  text-align: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  
  ${SlideContainer}:hover & {
    opacity: 1;
  }
`;

const AddToCartButton = styled.button`
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  background: #2c5282;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.3s ease;
  
  ${SlideContainer}:hover & {
    opacity: 1;
  }

  &:hover {
    background: #1a365d;
  }
`;

const CartList = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  background: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-height: 300px;
  overflow-y: auto;
  width: 250px;
  z-index: 1000;
`;

const CartItem = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-bottom: 1px solid #eee;
  
  &:last-child {
    border-bottom: none;
  }
`;

const CartItemImage = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  margin-right: 1rem;
`;

const CartItemDetails = styled.div`
  flex: 1;
`;

const CartItemTitle = styled.div`
  font-size: 0.9rem;
  margin-bottom: 0.25rem;
`;

const CartItemPrice = styled.div`
  font-size: 0.8rem;
  color: #666;
`;

const AutoRotatingCarousel: React.FC<AutoRotatingCarouselProps> = ({ 
  title, 
  slides,
  onAddToCart 
}) => {
  const [cartItems, setCartItems] = useState<CarouselSlide[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [timeoutId]);

  const handleAddToCart = (e: React.MouseEvent, slide: CarouselSlide) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Clear any existing timeout
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    // Add item to cart
    setCartItems(prev => [...prev, slide]);
    setShowCart(true);

    // Call the parent's onAddToCart if provided
    if (onAddToCart) {
      onAddToCart(slide);
    }
    
    // Set new timeout to hide cart
    const newTimeoutId = setTimeout(() => {
      setShowCart(false);
    }, 3000);
    
    setTimeoutId(newTimeoutId);
  };

  return (
    <CarouselContainer>
      <CarouselTitle>{title}</CarouselTitle>
      {showCart && cartItems.length > 0 && (
        <CartList>
          {cartItems.map((item, index) => (
            <CartItem key={index}>
              <CartItemImage src={item.image} alt={item.categoryTitle} />
              <CartItemDetails>
                <CartItemTitle>{item.categoryTitle}</CartItemTitle>
                <CartItemPrice>${item.price.toFixed(2)}</CartItemPrice>
              </CartItemDetails>
            </CartItem>
          ))}
        </CartList>
      )}
      <StyledSwiper
        modules={[Autoplay]} 
        spaceBetween={30}
        slidesPerView={3}
        autoplay={{
          delay: 2000, 
          disableOnInteraction: true,
        }}
        loop={true}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            {slide.productUrl ? (
              <SlideContainer
                href={slide.productUrl}
                target="_blank"
                rel="noopener noreferrer"
                isLink={true}
              >
                <SlideImage src={slide.image} alt={`Category: ${slide.categoryTitle}`} />
                <SlideTitle>${slide.price.toFixed(2)}</SlideTitle>
                <AddToCartButton onClick={(e) => handleAddToCart(e, slide)}>
                  Add to Cart
                </AddToCartButton>
              </SlideContainer>
            ) : (
              <SlideContainer as="div" isLink={false}>
                <SlideImage src={slide.image} alt={`Category: ${slide.categoryTitle}`} />
                <SlideTitle>${slide.price.toFixed(2)}</SlideTitle>
                <AddToCartButton onClick={(e) => handleAddToCart(e, slide)}>
                  Add to Cart
                </AddToCartButton>
              </SlideContainer>
            )}
          </SwiperSlide>
        ))}
      </StyledSwiper>
    </CarouselContainer>
  );
};

export default AutoRotatingCarousel; 