import styled from '@emotion/styled';
import { Link, useLocation } from 'react-router-dom';
import React from 'react';

const MobileNavContainer = styled.nav`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: var(--background-color);
  border-bottom: 1px solid var(--border-color);
  z-index: 1000;
  padding: 1rem;

  @media (max-width: 900px) {
    display: block;
  }
`;

const NavRow = styled.div`
  display: flex;
//   justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.isActive ? 'black' : '#888'};
  font-size: 0.9rem;
  font-weight: ${props => props.isActive ? '500' : '400'};
  transition: color 0.2s ease;
  
  &:hover {
    color: black;
  }
`;

const MobileNavigation = () => {
  const location = useLocation();
  
  const isActivePage = (paths) => {
    return paths.some(path => location.pathname === path || location.pathname.startsWith(path));
  };

  return (
    <MobileNavContainer>
      <NavRow>
        <NavLink 
          to="/" 
          isActive={isActivePage(['/roster-monster', '/kura-kura', '/ogp-illustration-guidelines', '/byos'])}
        >
          Interaction Design
        </NavLink>
        <NavLink 
          to="/web-experiments" 
          isActive={isActivePage(['/web-experiments'])}
        >
          Creative Tech
        </NavLink>
        <NavLink style={{ marginLeft: 'auto' }}
          to="/about" 
          isActive={isActivePage(['/about'])}
        >
          About
        </NavLink>
      </NavRow>
    </MobileNavContainer>
  );
};

export default MobileNavigation; 