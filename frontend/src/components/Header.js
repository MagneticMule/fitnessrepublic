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
  min-height:85vh;
  overflow: hidden;
  z-index: 0;
  display: block;
  background: linear-gradient(
      120.04deg,
      rgba(255, 215, 0, .2) 30.53%,
      rgba(102, 51, 153, 1) 100%
    ),

    // linear-gradient(
    //   255deg,
    //   rgba(0, 13, 129, 1) 0%,
    //   rgba(255, 255, 255, 0.2) 50%
    // ),
    rgba(255, 215, 0, 0.13);
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
  height: 85vh;
  min-height: min(30em, 860px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align:center;
`;

const Title = styled.h1`
  color: var(--white);
  text-shadow: 2px 2px 0px 0px rgba(0, 0, 0, 0.85) inset;
  filter: drop-shadow(1px 1px 64px rgba(0,0,0, 0.9));
  font-size: 9.209rem;
  letter-spacing: -0.05em;
  text-transform: capitalize;
  text-align:center;
  padding:0;
  margin:0;

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
    font-size: 7.209rem;
  }

  @media ${device.desktop} {
    font-size: 8.209rem;
  }
`;

const Subtitle = styled.p`
  color:var(--white);
  width: fit-content;
  font-weight: bold;
  font-size: 1.1rem;
  text-transform: uppercase;
  text-align:center;
`;

const Media = styled.div`
  position: relative;
  > video {
    object-fit: cover;
    position: absolute;
    min-height: 110vh;
    width: 100%;
    z-index: -1;
  }
`;

const TextSection = ({ video, title, subtitle, cta }) => {
  let ctaButton = "";
  if (cta !== "none") {
    ctaButton = (
      <Button title={
        <>Grab Our Free Pass <strong>Now</strong></>} destination={"/free-ashby-gym-pass"} />
    );
  }
  return (
    <Head>
      <Media>
        <video autoPlay={true} muted={true} loop={true}>
          <source src={video} type="video/mp4" />
        </video>
      </Media>
      <Container>
        <Contents>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
          {ctaButton}
        </Contents>
      </Container>
    </Head>
  );
};

export default TextSection;
