import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Section = styled.section`
  margin-bottom: 3rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #2c5282;
  margin-bottom: 2rem;
  text-align: center;
`;

const Subtitle = styled.h2`
  font-size: 1.8rem;
  color: #2c5282;
  margin-bottom: 1.5rem;
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #4a5568;
  margin-bottom: 1.5rem;
`;

const Highlight = styled.span`
  color: #2c5282;
  font-weight: 600;
`;

const MissionStatement = styled.div`
  background-color: #f7fafc;
  padding: 2rem;
  border-radius: 8px;
  margin: 2rem 0;
  border-left: 4px solid #2c5282;
`;

const AboutPage: React.FC = () => {
  return (
    <AboutContainer>
      <Title>About Artisan Avenue</Title>
      
      <Section>
        <Subtitle>Our Mission</Subtitle>
        <MissionStatement>
          <Paragraph>
            At Artisan Avenue, we're dedicated to <Highlight>celebrating and supporting local culinary artists</Highlight> by providing them with a platform to showcase their unique creations and connect with appreciative customers who value handcrafted excellence.
          </Paragraph>
        </MissionStatement>
      </Section>

      <Section>
        <Subtitle>Supporting Local Artisans</Subtitle>
        <Paragraph>
          We believe that every piece of culinary art tells a story. Our platform serves as a bridge between talented local artisans and discerning customers who appreciate the <Highlight>craftsmanship, tradition, and innovation</Highlight> that goes into each creation.
        </Paragraph>
        <Paragraph>
          From hand-thrown ceramic dinnerware to meticulously crafted serving pieces, each item in our collection represents hours of dedication and passion from local artists who pour their heart into their work.
        </Paragraph>
      </Section>

      <Section>
        <Subtitle>Our Commitment</Subtitle>
        <Paragraph>
          We are committed to:
        </Paragraph>
        <ul>
          <li><Paragraph>Providing fair compensation and exposure for local artisans</Paragraph></li>
          <li><Paragraph>Maintaining high standards of quality and craftsmanship</Paragraph></li>
          <li><Paragraph>Creating a sustainable marketplace for handmade culinary art</Paragraph></li>
          <li><Paragraph>Educating customers about the value of artisanal work</Paragraph></li>
        </ul>
      </Section>

      <Section>
        <Subtitle>Join Our Community</Subtitle>
        <Paragraph>
          Whether you're an artist looking to share your work or a customer seeking unique, handcrafted pieces, Artisan Avenue welcomes you to our community. Together, we can <Highlight>preserve traditional craftsmanship</Highlight> while supporting the growth of local artistic talent.
        </Paragraph>
        <Paragraph>
          Every purchase you make directly supports local artists and helps keep traditional culinary arts alive in our communities.
        </Paragraph>
      </Section>
    </AboutContainer>
  );
};

export default AboutPage; 