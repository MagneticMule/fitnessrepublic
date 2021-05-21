import React from 'react';
import PropTypes from "prop-types";
import { Link } from "gatsby";
import styled, { withTheme } from 'styled-components';
import Container from '../styles/ContainerStyle';
import FRlogo from '../assets/images/svg/fitness-republic-logo-header.svg';

import { device } from "../styles/DeviceSizes";

const BackgroundCol = "rgba(255, 255, 255, 0.85)";

const MenuHolder = styled.div`
  background: ${BackgroundCol};
  backdrop-filter: blur(16px);
  box-shadow: 1px 0 16px rgba(100, 40, 40, 0.2);
  border-bottom: 1px solid var(--orange);
  top: 0;
  left: 0;
  right: 0;
  position: sticky;
  z-index: 1;
  display: flex;
`;


const MenuContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  flex: 1;
  @media ${device.mobileS} {
    flex-direction: column;
  }

  @media ${device.laptop} {
    flex-direction: row;
  }

  @media ${device.laptopL} {
  }

  @media ${device.desktop} {
  }
`;

const Navigation = styled.nav`
  display: inline-block;
  flex: 1;

  ul {
    display: flex;
    margin: 0;
    padding: 0;
    justify-content: space-between;


    @media ${device.mobileS} {
      flex-direction: column;
      height: 300px;
    }

    @media ${device.laptop} {
      flex-direction: row;
      height: auto;
    }
  }

  li {
    text-decoration: none;
    text-transform: uppercase;
    display: inline-block;

  }

  li + li {
    margin-left: 2em;
  }

  @media ${device.mobileS} {
    flex-direction: column;
    display: none;
  }

  @media ${device.laptop} {
    flex-direction: row;
    display: inline-block;
    flex: 1;
    justify-content: space-between;
  }
`;

const Logo = styled.div`
  height: 1.8em;

`;

const Spacer = styled.div`
  flex: 1;
`;

const StyledLink = styled(props => <Link {...props} />)`
  color: black;
  font-weight: 500;
  transition: 0.3s color ease-in-out;
  &:hover {
    color: var(--orange);
  }
`;

const NavToggle = styled.input.attrs({ type: "checkbox" })`
  display: none;
  :checked ~ nav {
    display: inline-block;

  }
`;

const BurgerIcon = styled.label.attrs({ for: "nav-toggle" })`
  display: inline-block;
  margin-left: 2em;
  margin-top: 2em;
  cursor: pointer;
  span,
  &:before,
  &:after {
    display: block;
    background: black;
    height: 4px;
    width: 1.6em;
    border-radius: 2px;
  }
  &:before,
  &:after {
    content: "";
  }
  &:before {
    margin-bottom: 6px;
  }
  &:after {
    margin-top: 6px;
  }

  @media ${device.mobileS} {
    display: inline-block;
  }

  @media ${device.laptop} {
    display: none;
  }

  @media ${device.laptopL} {
  }

  @media ${device.desktop} {
  }
`;

const Menu = () => {
return (
  <MenuHolder>
    <BurgerIcon>
      <span></span>
    </BurgerIcon>
    <MenuContainer>
      <StyledLink to="/" aria-label="Links to Fitness Republic home page">
        <Logo>
          <FRlogo alt="Fitness Republic Logo" />
        </Logo>
      </StyledLink>
      <NavToggle id="nav-toggle" />
      <Navigation>
        <ul>
          <li>
            <spacer />
          </li>
          <li>
            <StyledLink to="/membership">Membership</StyledLink>
          </li>
          <li>
            <StyledLink to="/training">Personal Training</StyledLink>
          </li>
          <li>
            <StyledLink to="/classes">Classes</StyledLink>
          </li>
          <li>
            <StyledLink to="/about">About</StyledLink>
          </li>
        </ul>
      </Navigation>
    </MenuContainer>
  </MenuHolder>
);
}


export default Menu;
