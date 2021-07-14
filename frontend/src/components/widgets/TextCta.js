import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { device } from "../../styles/DeviceSizes";

const Cta = styled.aside`
  display: flex;
  flex-direction: column;

  padding: 0;
  margin: 0;
  > {
    padding: 0;
    margin: 0;
    font-weight: bold;
    color: var(--deeper-purple);
  }

  @media ${device.mobileM} {
    grid-column: 1/5;
  }

  @media ${device.laptop} {
    grid-column: ${(props) => (props.pos ? props.pos : "1/2")};
    margin-bottom: 0;
  }
`;

const TextCta = ({
  introText = "Rather speak to a Real Life Human?",
  link,
  linkText,
}) => {
  return (
    <Cta>
      <strong>{introText}</strong>
      <a
        aria-label="Call the gym to chat to one of our team"
        href="tel:+4401530413330"
        rel="noopener noreferrer"
      >
        <FaPhoneSquareAlt /> 01530 413330
      </a>
    </Cta>
  );
};

export default TextCta;
