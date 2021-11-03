import PropTypes from "prop-types";
import React from "react";

import { Link as GatsbyLink } from "gatsby";
import styled from "styled-components";

import Icon from "./Icon";

const MajorButton = styled(GatsbyLink)`
  margin: 2em 0 1em 0;
  background: var(--lin-grad-smooth-orange);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 32px;
  display: inline-block;
  justify-content: space-between;
  font-weight: 700;
  font-size: 1.1rem;
  text-transform: uppercase;
  color: var(--white);
  padding: 0.8em 2em;
  cursor: pointer;
  transition: all 0.2s;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  border: 1px solid var(--deep-purple);
  &:hover {
    color: var(--white);
    box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.3);
  }
`;

const MinorButton = styled(MajorButton)`
  background: none;
  border: 0 0 1px solid white;
  //border: 2px solid var(--light-grey);
  color: var(--light-grey);
    &:hover {
    color: var(--white);
    box-shadow: none;
  }
`;

const Button = (props) => {
  if (props.style === "minor") {
    return (
      <MinorButton
        className="general"
        aria-label={props.aria}
        to={props.destination}
      >
        {props.title}
      </MinorButton>
    );
  }
  return (
    <MajorButton
      className="general"
      aria-label={props.aria}
      to={props.destination}
    >
      {props.title}
    </MajorButton>
  );
};

Button.propTypes = {
  aria: PropTypes.string,
  destination: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.oneOf(["form", "cta", "general"]),
  style: PropTypes.oneOf(["major", "minor"])
};

export default Button;
