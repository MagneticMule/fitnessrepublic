import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import { FaStar } from "react-icons/fa";
import { device } from "../styles/DeviceSizes";


const Section = styled.section`
  grid-column: 1/-1;
  margin-bottom:4em;
`;

const ReviewContainer = styled.div`
  border-radius: 8px;
  display: flex;
  gap: 2em;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  background: var(--dark-grad);
  padding: 4em;
  margin: 0 2em 2em 2em;

  @media ${device.mobileS} {
    padding: 2em;
    margin: 0 -1.5em;
    border-radius: 0;
  }

  @media ${device.laptop} {
    padding: 4em;
    border-radius: 8px;
    margin: 0 0 1em;
  }

  @media ${device.laptopL} {
  }

  @media ${device.desktop} {
  }
`;

const ReviewBackground = styled.div`
  background: rgba(255, 255, 255, 0.1);
  background: red;
`;

const Subtitle = styled.h3`
  margin: 0;
  color: var(--orange);
  letter-spacing: -1px;
  font-weight: 300;
  text-transform: capitalize;
  color: var(--orange);
`;

const IntroText = styled.div`
  font-size: 2rem;
  letter-spacing: -1px;
  color: var(--orange);
  font-style: italic;
  margin: 0 2em 4em 2em;
  line-height: 1.5;
`;

const Review = styled.div`
  background: rgba(255, 255, 255, 0.1);
  flex: 1;
  padding: 4em;
  display: flex;
  gap: 2em;
  flex-direction: column;
  justify-content: space-between;
  color: var(--white);
  border-radius: 8px;
  margin-top: 4em;

  > .headshot {
    background: var(--deep-purple);
    height: 120px;
    width: 120px;
    margin: 0 2em 1em 0;
    border-radius: 20%;
    overflow: hidden;
    border: 8px solid rgba(255,100,100,.4);
    box-shadow: var(--shadow-low);
    align-self: center;
    margin-top: -130px;
  }
`;

const ReviewText = styled.div`
  justify-self: flex-start;
  font-size: 1.2rem;
  hyphens: auto;

  &::before {
    color: var(--orange);
    font-weight: 900;
    content: open-quote;
    padding-right: 0.2rem;
    margin-left: -0.7rem;
  }

  &::after {
    color: var(--orange);
    font-weight: 900;
    content: close-quote;
    margin-left: 0.2rem;
  }
`;

const ReviewerName = styled.p`
  font-size: 1rem;
  font-weight: 900;
  > span {
    color:var(--orange);
    display:block;
    font-style: italic;
    font-style: normal;
    font-weight: 300;
  }
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
  color: var(--white);
  font-weight: 500;
  margin: 0;
`;

const SubTitle = styled.p`
  color: var(--orange);
  font-size: 1.4rem;
  font-weight: 700;
  padding: 0;
  margin: 0;
  margin-bottom: 2em;
`;

const SingleReview = ({ review }) => {
  return (
    <Review>
      <Img
        className="headshot"
        fixed={review.headshot}
        alt="{review.reviewer}'s headshot"
      />
      <ReviewText>{review.text}</ReviewText>
      <ReviewerName>
        {review.reviewer}
        {" : "}
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <span>
          Review left via <strong>{review.origin}</strong>
        </span>
      </ReviewerName>
    </Review>
  );
};

const ReviewSection = ({ reviews }) => {
  if (!reviews) return;
  return (
    <Section>
      <ReviewContainer>
        <Header>
          <Title>You are in good company</Title>
          <SubTitle>Over 200 five star reviews on Google and Facebook</SubTitle>
        </Header>
        {reviews.map(review => (
          <SingleReview review={review} />
        ))}
      </ReviewContainer>
    </Section>
  );
};

export default ReviewSection;
