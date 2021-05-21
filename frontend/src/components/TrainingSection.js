import React from "react";
import styled from "styled-components";
import { SplitSection } from "../styles/GridStyles";
import TrainingCard from "./widgets/TrainingCard";
import { device } from "../styles/DeviceSizes";
const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 4rem 0;
  background: var(--light-grad);
  box-shadow: inset 0px -4px 16px rgba(0, 0, 0, 0.25);
  padding: 4em;
  border-radius: 8px;
  gap: 0 5%;
  grid-column: 1/-1;

  @media ${device.mobileS} {
    padding: 2em;
    margin: 0 -1.5em 4em -1.5em;
    border-radius: 0;
  }

  @media ${device.laptop} {
    padding: 4em;
    margin: 0 0 4em 0;
    border-radius: 8px;
  }
`;

const Header = styled.div`
  flex-basis: 100%;
`;

const Title = styled.h3`
  color: var(--white);
  font-weight: 500;
  margin: 0;
`;

const SubTitle = styled.p`
color: var(--deep-purple);
  font-size: 1.4rem;
  font-weight: 700;
  padding: 0;
  margin: 0;
  margin-bottom: 2em;
`;

const Info = styled.div`
  color: var(--deep-purple);
  font-size: 1.1rem;
  font-weight: 500;
  margin-top: 2em;
  max-width: 900px;
  flex-basis: 100%;
  display: flex;
  flex-direction: row;
  > * {
    flex-basis: 50%;
    padding: 0 1em;
  }

  a {
    color: var(--deep-purple);
    font-weight:700;

    &:hover{
      color: var(--deeper-purple);
    }
  }
`;

const TrainingSection = ({ title, subtitle, trainings,info }) => {
  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
      </Header>
      {trainings.map(training => (
        <TrainingCard training={training} />
      ))}

      <Info>
        {info}
      </Info>
    </Container>
  );
};

export default TrainingSection;
