import React from "react";
import styled from "styled-components";
import { GatsbyImage } from "gatsby-plugin-image";
import { FaStar } from "react-icons/fa";
import { device } from "../styles/DeviceSizes";
import Image from "../components/widgets/Image";


const Section = styled.section`
  grid-column: 1/-1;
  margin-bottom:4em;
`;

const InstagramContainer = styled.div`
  text-align: center;
  display: flex;
  gap: 1em 1em;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  @media ${device.mobileS} {
    border-radius: 0;
  }

  @media ${device.laptop} {
    border-radius: 8px;
  }

  @media ${device.laptopL} {
  }

  @media ${device.desktop} {
  }
`;

const Instagram = styled.div`
  box-shadow: var(--shadow-low);
  background: var(--white);
  flex: 1;
  color: var(--deep-purple);
  border-radius: 8px;
  margin-top: 1em;
`;

const CallToAction = styled.div`
  padding: 8em 0;
  flex-basis: 100%;
  background: var(--orange);
  color: white;
`;

const Header = styled.div`
  flex-basis: 100%;
  margin-bottom: 1em;
`;

const Title = styled.h3`
  color: var(--deep-purple);
  font-weight: 900;
  margin: 0;
`;

const SubTitle = styled.p`
  color: var(--orange);
  font-size: 1.4rem;
  font-weight: 700;
  padding: 0;
  margin: 0;
`;

const InstagramCard = ({ instagram }) => {
  return (
    <Instagram>
      <GatsbyImage image={instagram.image.asset.gatsbyImageData}/>
    </Instagram>
  );
};

const InstagramSection = ({ instagrams }) => {
  console.debug(instagrams);
  if (!instagrams) return;
  return (
    <Section>
      <InstagramContainer>
        <Header>
          <Title>Recent Instagrams</Title>
          <SubTitle>What's happening at our gym</SubTitle>
        </Header>
        {instagrams.edges.map(instagram => (
          <InstagramCard instagram={instagram.node} />
        ))}
      </InstagramContainer>
    </Section>
  );
};

export default InstagramSection;
