import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 1rem 2rem;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  z-index: 1000;
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLogo = styled.div`
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  cursor: pointer;
  
  &:hover {
    color: #007bff;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <NavContainer>
        <NavLogo>[Your Name]</NavLogo>
        <NavLinks>
          <NavLink to="home" smooth={true} duration={500}>
            Home
          </NavLink>
          <NavLink to="projects" smooth={true} duration={500}>
            Projects
          </NavLink>
           <NavLink to="contact" smooth={true} duration={500}>
            Contact
          </NavLink>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
