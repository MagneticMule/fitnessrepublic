import React from "react";
import styled from "styled-components";
import DualSection from "../styles/GridStyles";
import Button from "./widgets/Button";
import { device } from "../styles/DeviceSizes";
import Container from "../styles/ContainerStyle";

/* local components */
// const Container = styled.div`
//   grid-column: 2/-1;
//   max-width: 1400px;
// `;

const Head = styled.head`
  overflow: hidden;
  z-index: 0;
  display: block;
  background: linear-gradient(
      120.04deg,
      rgba(80, 0, 30, 0.9) 30.53%,
      rgba(255, 255, 155, 0.1) 100%
    ),

    linear-gradient(
      255deg,
      rgba(0, 13, 129, 0.9) 0%,
      rgba(255, 255, 255, 0.6) 50.29%
    ),
    rgba(0, 0, 0, 0.23);
  box-shadow: inset 0px -4px 16px rgba(0, 0, 0, 0.85);

  @media ${device.mobileS} {
  }

  @media ${device.laptop} {
  }

  @media ${device.laptopL} {
  }

  @media ${device.desktop} {
  }
`;

const Contents = styled.div`
  height: 48vh;
  min-height: min(30em, 860px);
  max-height: 50em;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
`;

const Title = styled.h1`
  color: var(--white);
  text-shadow: 1px 1px 0px 0px rgba(0, 0, 0, 0.25) inset;
  filter: drop-shadow(1px 1px 0 rgba(255, 255, 255, 0.2));
  font-size: 4.209rem;
  letter-spacing: -0.05em;
  text-transform: capitalize;

  span {
    font-weight: 900;
  }

  @media ${device.mobileS} {
    font-size: 3.209rem;
  }

  @media ${device.laptop} {
    font-size: 4.209rem;
  }

  @media ${device.laptopL} {
    font-size: 5.209rem;
  }

  @media ${device.desktop} {
    font-size: 6.209rem;
  }
`;

const Subtitle = styled.p`
  color:var(--white);
  width: fit-content;
  font-weight: bold;
  font-size: 1.1rem;
  text-transform: uppercase;
`;

const Video = styled.div`
  position: relative;
  > video {
    object-fit: cover;
    position: absolute;
    min-height: 80vh;
    width: 100%;
    z-index: -1;
  }
`;

const TextSection = ({ video, title, subtitle, cta }) => {
  let ctaButton = "";
  if (cta !== "none") {
    ctaButton = (
      <Button title={
        <>Grab Our Free Pass <strong>Now</strong></>} destination={"/#getstarted"} />
    );
  }
  return (
    <Head>
      <Video>
        <video autoPlay={true} muted={true} loop={true}>
          <source src={video} type="video/mp4" />
        </video>
      </Video>
      <Container>
        <Contents>
          <div>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
            {ctaButton}
          </div>
        </Contents>
      </Container>
    </Head>
  );
};

export default TextSection;
