import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.section`
  max-width: 1200px;
  margin: 4rem auto;
  padding: 0 2rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #292c2e;
  font-weight: 700;
  letter-spacing: -0.5px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4rem;
  align-items: center;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const Content = styled.div`
  p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #4a4a4a;
    margin-bottom: 1.5rem;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  
  &::before {
    content: '';
    display: block;
    padding-top: 75%;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 4rem;
  text-align: center;
`;

const StatItem = styled.div`
  h3 {
    font-size: 2.5rem;
    font-weight: 700;
    color: #292c2e;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;
    color: #666;
  }
`;

const Values = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ValueCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  text-align: center;

  h3 {
    font-size: 1.25rem;
    color: #292c2e;
    margin: 1rem 0;
  }

  p {
    color: #666;
    line-height: 1.6;
  }

  svg {
    width: 48px;
    height: 48px;
    color: #454b4e;
  }
`;

const About: React.FC = () => {
  return (
    <AboutContainer>
      <Title>Our Story</Title>
      <Grid>
        <Content>
          <p>
            Welcome to Artisan Avenue, where craftsmanship meets contemporary design. Founded in 2020, 
            we've made it our mission to bring exceptional handcrafted ceramics to homes around the world.
          </p>
          <p>
            Each piece in our collection tells a unique story, crafted by skilled artisans who pour their 
            heart and soul into every creation. We believe in the beauty of imperfection and the value 
            of handmade goods that bring character to your space.
          </p>
          <p>
            Our commitment to sustainability and ethical practices ensures that every purchase you make 
            not only enhances your home but also supports traditional craftsmanship and responsible 
            production methods.
          </p>
        </Content>
        <ImageContainer>
          <img src="/images/workshop.jpg" alt="Artisan crafting ceramics" />
        </ImageContainer>
      </Grid>

      <Stats>
        <StatItem>
          <h3>500+</h3>
          <p>Artisan Partners</p>
        </StatItem>
        <StatItem>
          <h3>50k+</h3>
          <p>Happy Customers</p>
        </StatItem>
        <StatItem>
          <h3>100%</h3>
          <p>Handcrafted</p>
        </StatItem>
      </Stats>

      <Values>
        <ValueCard>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
          <h3>Quality Assurance</h3>
          <p>Every piece undergoes rigorous quality checks to ensure excellence in craftsmanship.</p>
        </ValueCard>
        <ValueCard>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
          <h3>Fair Trade</h3>
          <p>We ensure fair compensation and sustainable practices across our supply chain.</p>
        </ValueCard>
        <ValueCard>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 4v16h16M4 20l7-7m-7 7l16-16m-9 9l9 9" />
          </svg>
          <h3>Innovation</h3>
          <p>Blending traditional techniques with modern design for contemporary living.</p>
        </ValueCard>
      </Values>
    </AboutContainer>
  );
};

export default About; 