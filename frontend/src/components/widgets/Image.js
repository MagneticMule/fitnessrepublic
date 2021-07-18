import React from "react";
import { graphql, useStaticQuery } from "gatsby";
// import Img from 'gatsby-image';
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { device } from "../../styles/DeviceSizes";

const PicContainer = styled.div`
  grid-column: ${(props) => (props.pos ? props.pos : "1/5")};
  margin-bottom: 2em;
`;

const ImageContainer = styled.div`
  box-shadow: inset 0px 4px 2px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  overflow: hidden;
  z-index: 1;

  @media ${device.mobileS} {
    border-radius: 0;
    margin: 0 -1.5em;
  }

  @media ${device.laptop} {
    border-radius: 8px;
    margin: 0;
  }

  @media ${device.laptopL} {
  }

  @media ${device.desktop} {
  }
`;

const StyledImg = styled(GatsbyImage)`
  z-index: 0;
`;

const Blurb = styled.p`
  color: var(--dark-grey);
  font-style: italic;
  > strong {
    font-weight: bold;
  }
`;

const Image = ({ pos, pic, alt, blurb }) => {
  return (
    <PicContainer pos={pos}>
      <ImageContainer>
        <StyledImg image={pic} alt={alt} />
      </ImageContainer>
      <Blurb>{blurb}</Blurb>
    </PicContainer>
  );
};

export default Image;
