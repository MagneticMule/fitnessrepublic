import React from 'react';
import styled from 'styled-components';
import { device } from "../styles/DeviceSizes";
const TextContent = styled.div`

  @media ${device.mobileM} {
    grid-column: 1 / -1;
  }

  @media ${device.laptop} {
    grid-column: ${props => (props.pos ? props.pos : "2 / -1")};
  }

  @media ${device.laptopL} {
  }

  @media ${device.desktop} {
  }
`;

const Background = styled.div`
  background-color:var(--white);
`;

const SectionTitle = styled.h2`
  margin: -1rem 0 0 0;
  font-size: 4.209rem;
  font-weight: 300;
  letter-spacing: -0.05em;
  text-transform: capitalize;
  color: var(--deeper-purple);
`;

const SubTitle = styled.h3`
  margin: 0;
  padding:0;
  letter-spacing: -1px;
  font-weight: 300;
  text-transform: capitalize;
  color: var(--orange);
`;

const BodyText = styled.div`
  font-size: 1.2rem;
  margin: 1.2em 0 2em 0;
  ul {
    > li {
      margin: 1em 0;
      padding-left: 2em;
      border-left: 4px solid var(--orange);
      > strong {
        color: var(--orange);
        text-transform: capitalize;
        font-weight: 500;
        font-size: 1.4rem;
        display: block;
      }
    }
  }

  ol {
    margin: 1em 0;

    > li {
      list-style: decimal;
    }
  }
`;

const BackStripe = styled.div`
  & {
    position: relative;
    overflow: hidden;
  }

  &:before {
    z-index: -1;
    content: ' ';
    background: var(--lightsripe-grad);
    position: absolute;
    top: -200%;
    right: 0;
    left: -100%;
    bottom: 0;
    transform: skewY(-66deg);
  }

`;

const SideBar = styled.div`
 > p {
   color: var(--dark-grey);
 }
`;

const TextSection = (props) => {
return (
  <TextContent id={props.id} pos={props.pos}>
    <SectionTitle>{props.title}</SectionTitle>
    <SubTitle>{props.subtitle}</SubTitle>
    <BodyText>{props.body}</BodyText>
  </TextContent>
)
}

export default TextSection;