import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

const ContactSection = styled.section`
  padding: 5rem 2rem;
  background: #1e1e1e;
  color: white;
`;

const ContactContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const ContactForm = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Input = styled.input`
  padding: 1rem;
  border: none;
  border-radius: 5px;
  background: #2d2d2d;
  color: white;
`;

const TextArea = styled.textarea`
  padding: 1rem;
  border: none;
  border-radius: 5px;
  background: #2d2d2d;
  color: white;
  min-height: 150px;
`;

const Button = styled(motion.button)`
  padding: 1rem 2rem;
  border: none;
  border-radius: 5px;
  background: #007bff;
  color: white;
  cursor: pointer;
  font-weight: bold;
`;

const SocialLinks = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled.a`
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: color 0.2s ease;

  &:hover {
    color: #007bff;
  }
`;

const FooterSection = styled.footer`
  background: #1e1e1e;
  color: white;
  text-align: center;
  padding: 1rem 0;
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 1rem;
`;

const Contact = () => {
  return (
    <>
      <ContactSection id="contact">
        <ContactContainer>
          <h2>Contact Me</h2>
          <ContactForm
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Input type="text" placeholder="Name" />
            <Input type="email" placeholder="Email" />
            <TextArea placeholder="Message" />
            <Button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
            >
              Send Message
            </Button>
          </ContactForm>
          <SocialLinks>
            <SocialLink href="https://github.com/YOUR_USERNAME" target="_blank">
              <FaGithub /> GitHub
            </SocialLink>
            <SocialLink href="https://twitter.com/YOUR_USERNAME" target="_blank">
              <FaTwitter /> Twitter
            </SocialLink>
            <SocialLink href="https://linkedin.com/in/YOUR_USERNAME" target="_blank">
              <FaLinkedin /> LinkedIn
            </SocialLink>
          </SocialLinks>
        </ContactContainer>
      </ContactSection>
      <FooterSection>
        <FooterText>© {new Date().getFullYear()} Your Name. All rights reserved.</FooterText>
      </FooterSection>
    </>
  );
};

export default Contact;
