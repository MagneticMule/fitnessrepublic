import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";

const SingleImage = (props) => {
  return <>Image File</>;
};

const Container = styled.section`
  grid-column: ${(props) => (props.pos ? props.pos : "1/-1")};
  display: grid;
  margin: 0 0 4em 0;
  /* grid-template-columns: repeat(auto-fit, minmax(25%, 1fr)); */
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1em;
  .image {
    border-radius: 8px;
    overflow: hidden;
  }

  .image:nth-of-type(3n) {
    grid-column: 1/-1;
  }
`;

const ImageGallery = (props) => {
  return (
    <Container>
      <div className="image">
        <GatsbyImage image={props.pic1} alt={props.alt} />
      </div>
      <div className="image">
        <GatsbyImage image={props.pic2} alt={props.alt} />
      </div>
      <div className="image">
        <GatsbyImage image={props.pic3} alt={props.alt} />
      </div>
    </Container>
  );
};

export default ImageGallery;
