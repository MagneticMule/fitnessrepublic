import React from "react";
import styled from "styled-components";
import Container from "../styles/ContainerStyle";
import { device } from "../styles/DeviceSizes";

import { FaPhoneSquareAlt } from "react-icons/fa";

const Background = styled.div`
  background: var(--dark-grad);
  color: var(--white);

  z-index: -1;

  @media ${device.mobileS} {
    font-size: 0.75rem;
  }

  @media ${device.laptop} {
    /* max-width: 980px; */
    font-size: 1rem;
  }

  @media ${device.laptopL} {
    /* max-width: 1200px; */
  }

  @media ${device.desktop} {
    /* max-width: 1600px; */
  }
`;

const CovidButton = styled.li`
  background: var(--orange);
  padding: 0.6em 1em;
  border-radius: 16px;
`;

const Items = styled.div`
  a {
    color: var(--white);
    :hover {
      color: var(--orange);
    }
  }

  ul {
    font-weight: 900;
    display: flex;
    margin: 0;
    padding: 0;
    justify-content: space-between;
  }

  li {
    text-decoration: none;
    text-transform: uppercase;
    display: inline-block;
    font-weight: 500;
  }

  li + li {
    margin-left: 2em;
  }
`;

const MiniNav = (props) => {
  return (
    <Background>
      <Container>
        <Items>
          <ul>
            <li>
              Celebrating <strong>11 years in business</strong>
            </li>
            <li>
              <a
                aria-label="Call the gym to chat to one of our team"
                href="tel:+4401530413330"
                rel="noopener noreferrer"
              >
                <FaPhoneSquareAlt /> 01530 413330
              </a>
            </li>
          </ul>
        </Items>
      </Container>
    </Background>
  );
};

export default MiniNav;
