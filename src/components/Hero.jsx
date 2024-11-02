import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #1e1e1e 0%, #2d2d2d 100%);
  color: white;
`;

const HeroContent = styled.div`
  text-align: center;
`;

const Title = styled(motion.h1)`
  font-size: 4rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const Hero = () => {
  const [subtitle, setSubtitle] = useState('');
  const fullSubtitle = "Frontend Developer & UI Designer";
  const typingSpeed = 100; // Speed in milliseconds

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullSubtitle.length) {
        setSubtitle((prev) => prev + fullSubtitle[index]);
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval); // Cleanup on unmount
  }, []);

  return (
    <HeroSection>
      <HeroContent>
        <Title
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I'm [Your Name]
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {subtitle}
        </Subtitle>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
