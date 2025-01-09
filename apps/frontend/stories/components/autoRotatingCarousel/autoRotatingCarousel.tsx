import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'; 
import 'swiper/css';

export interface CarouselSlide {
  image: string;
  categoryTitle: string;
  productUrl?: string; 
}

interface AutoRotatingCarouselProps {
  title: string;
  slides: CarouselSlide[];
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

const SlideContent = styled.a<{ isLink: boolean }>`
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

const CategoryTitle = styled.div`
  position: absolute;
  bottom: 45%;
  left: 50%;
  transform: translateX(-50%);
  
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  text-decoration: underline; 
  text-transform: uppercase; 
`;

const AutoRotatingCarousel: React.FC<AutoRotatingCarouselProps> = ({ title, slides }) => {
  return (
    <CarouselContainer>
      <CarouselTitle>{title}</CarouselTitle>
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
              <SlideContent
                href={slide.productUrl}
                target="_blank"
                rel="noopener noreferrer"
                isLink={true}
              >
                <SlideImage src={slide.image} alt={`Category: ${slide.categoryTitle}`} />
                <CategoryTitle>{slide.categoryTitle}</CategoryTitle>
              </SlideContent>
            ) : (
              <SlideContent as="div" isLink={false}>
                <SlideImage src={slide.image} alt={`Category: ${slide.categoryTitle}`} />
                <CategoryTitle>{slide.categoryTitle}</CategoryTitle>
              </SlideContent>
            )}
          </SwiperSlide>
        ))}
      </StyledSwiper>
    </CarouselContainer>
  );
};

export default AutoRotatingCarousel;
