import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image";
import styled from 'styled-components';




const HeadShot = (props) => {
  return <GatsbyImage image={props.headshot} alt="{props.name}'s headshot" />;
}



export default HeadShot;
