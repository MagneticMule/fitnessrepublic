import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';




const HeadShot = (props) => {
  return (
        <Img
          fixed={props.headshot}
          alt="{props.name}'s headshot"
        />
  )
}



export default HeadShot;
