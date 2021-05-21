import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import {
  FaFacebook as Facebook,
  FaTwitter as Twitter,
  FaInstagram as Instagram,
  FaYoutube as Youtube,
  FaAddressCard as Address,
  FaPhoneSquareAlt as Phone,
} from 'react-icons/fa';

const CircleIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  border-radius: 50%;
  height: 1.5rem;
  width: 1.5rem;
  padding: 1rem;
  background: var(--orange);
  color: var(--white);
  border: 0.5rem solid white;
`

const PlainIcon =styled.div`
padding-left: 1em;
display: inline-block;
align-self: center;

`;

const Icon = props => {

      if (props.style === 'plain') {
        return (
          <PlainIcon>
            <Phone size="2rem" />
          </PlainIcon>
        )
      }

  return (
    <CircleIcon>
      <Phone size="2rem" />
    </CircleIcon>
  )
}

Icon.propTypes = {
  iconName: PropTypes.oneOf([
    'Phone',
    'Information',
    'Question',
    'Facebook',
    'Youtube',
    'Instagram',
    'Whatsapp',
  ]),
  style: PropTypes.oneOf([
    'plain', 'circle'
  ])
}

export default Icon;