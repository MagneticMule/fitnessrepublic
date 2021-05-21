import PropTypes from 'prop-types'
import React from 'react'

import { Link as GatsbyLink } from 'gatsby';
import styled from 'styled-components';

import Icon from './Icon';

const StyledLink = styled(GatsbyLink)`
  margin: 2em 0 1em 0;
  background: var(--lin-grad-smooth-orange);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  display: inline-block;
  justify-content: space-between;
  font-weight: 700;
  font-size: 1rem;
  text-transform: uppercase;
  color: white;
  padding: .8em 2em;
  cursor: pointer;
  transition: all 0.2s;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  border: 1px solid var(--deep-purple);
  &:hover {
    color:white;
    box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.3);
  }
`;

const Button = props => {
  return (
      <StyledLink className="general"
      aria-label={props.aria}
      to={props.destination}>
        {props.title}
      </StyledLink>
  )
}

Button.propTypes = {
  aria: PropTypes.string,
  destination: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.oneOf(['form', 'cta', 'general']),
}

export default Button;
