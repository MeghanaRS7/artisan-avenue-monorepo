import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import ProductCard, { ProductCardProps } from '../productCard/productCard';


SwiperCore.use([Navigation]);

interface ProductCarouselProps {
  title: string;
  products: ProductCardProps[];
}

const CarouselContainer = styled.div`
  width: 100%;
  padding: 20px 0;
`;

const Title = styled.h2`
  font-size: 24px;
  color: #2f3542;
  margin-bottom: 15px;
`;

const StyledSwiper = styled(Swiper)`
  .swiper-button-next,
  .swiper-button-prev {
    color: #2f3542;
  }

  .swiper-pagination-bullet-active {
    background-color: #2ed573;
  }

   .swiper-slide {
    display: flex;
    width: 214%;
    justify-content: center; 
  }
`;

const ProductCarousel: React.FC<ProductCarouselProps> = ({ title, products }) => {
  return (
    <CarouselContainer>
      <Title>{title}</Title>
      <StyledSwiper
        spaceBetween={50}
        slidesPerView={4}
        navigation
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
      >
        {products.slice(0, 8).map((product, index) => (
          <SwiperSlide key={index}>
            <ProductCard {...product} />
          </SwiperSlide>
        ))}
      </StyledSwiper>
    </CarouselContainer>
  );
};

export default ProductCarousel;
