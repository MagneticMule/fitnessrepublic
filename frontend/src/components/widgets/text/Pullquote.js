import React from 'react';
import styled from 'styled-components';
import { device } from "../../../styles/DeviceSizes";

const QuoteContainer = styled.div`
  align-self: start;
  border-left: 1rem solid var(--orange);
  grid-column: ${props => (props.pos ? props.pos : "1/2")};
  margin-bottom: 0;

  @media ${device.mobileM} {
    grid-column: 1/5;
    margin-bottom: 2em;
  }

  @media ${device.laptop} {
    grid-column: ${props => (props.pos ? props.pos : "1/2")};
    margin-bottom: 0;
  }

  @media ${device.laptopL} {
  }

  @media ${device.desktop} {
  }
`;

const Quote = styled.div`
  display: inline-block;
  font-size: 1.2rem;
  font-weight: 500;
  hyphens: auto;
  color: var(--orange);
  padding: 0 2rem;

  &::before {
    color: var(--orange);
    font-weight: 900;
    content: open-quote;
    padding-right: 0.2rem;
    margin-left: -0.7rem;
  }

  &::after {
    color: var(--orange);
    font-weight: 900;
    content: close-quote;
    margin-left: 0.2rem;
  }
  `;


  const Attribution = styled.div`
    font-size: 0.8rem;
    color: var(--deep-purple);
    padding-left: 2rem;
  `;


const Pullquote = (props) => {
  return (
    <QuoteContainer>
      <Quote>{props.body}</Quote>
      <Attribution>{props.attribution}</Attribution>
    </QuoteContainer>
  )
}


export default Pullquote;