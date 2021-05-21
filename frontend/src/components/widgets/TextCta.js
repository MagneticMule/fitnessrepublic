import React from 'react';
import {Link} from 'gatsby';
import styled from 'styled-components';


const Cta = styled.aside`
  display: flex;

  >p {

  }

`;

const TextCta = (props) => {

  return (
    <Cta>
      <p>{props.introtext}</p>
      <Link to="{props.link}">{props.linktext}</Link>
    </Cta>
  )
}

export default TextCta;