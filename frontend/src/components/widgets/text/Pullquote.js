import React from "react";
import styled from "styled-components";
import { device } from "../../../styles/DeviceSizes";
import TextCta from "../TextCta";

const QuoteContainer = styled.aside`
  display: flex;
  flex-direction: column;
  /* border-left: 1rem solid var(--orange); */
  grid-column: ${(props) => (props.pos ? props.pos : "1/2")};
  margin-bottom: 0;

  @media ${device.mobileM} {
    grid-column: 1/-1;
  }

  @media ${device.laptop} {
    grid-column: ${(props) => (props.pos ? props.pos : "1/2")};
    margin-bottom: 0;
  }

  @media ${device.laptopL} {
  }

  @media ${device.desktop} {
  }
`;

const Quote = styled.aside`
  display: inline-block;
  font-size: 1.2rem;
  font-weight: 500;
  hyphens: auto;
  color: var(--orange);

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
  margin-bottom: 2em;
`;

const Cta = styled.div`
  padding: 0;
  justify-self: flex-end;
  margin: auto 0 2em 0;
`;

const Pullquote = ({ pos, body, attribution }) => {
  return (
    <QuoteContainer pos={pos}>
      <Quote>{body}</Quote>
      <Attribution>{attribution}</Attribution>
      <Cta>
        <TextCta introText="Call Simon now to arrange a visit to our gym" />
      </Cta>
    </QuoteContainer>
  );
};

export default Pullquote;
