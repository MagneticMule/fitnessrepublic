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
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: row;
  gap:1em;
  justify-content: space-evenly;
  > * {
    min-width: 160px;
    flex-grow: 1;
    flex-basis: 0;
    border-radius: 8px;
  }

  @media ${device.mobileS} {
    border-radius: 0;
  }

  @media ${device.laptop} {
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
  font-weight: 500;
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
      <GatsbyImage image={instagram.image.asset.gatsbyImageData}/>
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
        {instagrams.edges.map((instagram) => (
          <a
            href="https://www.instagram.com/fitnessrepublicgym/"
            target="_blank"
            rel="nofollow noopener"
          >
            <InstagramCard instagram={instagram.node} />
          </a>
        ))}
      </InstagramContainer>
    </Section>
  );
};

export default InstagramSection;
