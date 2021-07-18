import React from "react";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { convertToBgImage } from "gbimage-bridge";
import BackgroundImage from "gatsby-background-image";
import styled from "styled-components";

import "../../styles/background-image.css";

const WorkoutHeader = ({ image, title, description }) => {
  const bgImage = convertToBgImage(image);
  return (
    <BackgroundImage
      {...bgImage}
      className={"masthead"}
      backgroundColor={`#040e18`}
    >
      <div className="inner">
        <h1>{title}</h1>
        <h3>{description}</h3>
      </div>
    </BackgroundImage>
  );
};

export default WorkoutHeader;
