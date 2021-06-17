import React from 'react';
import {Link} from 'gatsby';
import styled from 'styled-components';
import { FaPhoneSquareAlt } from "react-icons/fa";

const Cta = styled.aside`
  display: flex;
  flex-direction: column;

  padding:0;
  margin:0;
  > {
    padding:0;
    margin:0;
    font-weight:bold;
    color: var(--deeper-purple);
  }

`;

const TextCta = ({introText, link, linkText}) => {

  return (
    <Cta>
      <strong>Rather speak to a Real Life Human?</strong>
      {introText}
      <a
        aria-label="Call the gym to chat to one of our team"
        href="tel:+4401530413330"
        rel="noopener noreferrer"
      >
        <FaPhoneSquareAlt /> 01530 413330
      </a>
    </Cta>
  );
}

export default TextCta;