import React, {useState, useEffect} from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';
import HeadShot from './widgets/HeadShot';
import Button from './widgets/Button';
import { device } from "../styles/DeviceSizes";


const Container = styled.div`
  grid-column: ${props => (props.pos ? props.pos : "1/2")};
  grid-row: span 2;

  @media ${device.mobileS} {
    text-align:center;
    grid-column: 1/-1;
    margin: 0;
  }

  @media ${device.laptop} {
    grid-column: ${props => (props.pos ? props.pos : "1/2")};
    grid-row: span 2;
  }
`;
const Bubble = styled.div`
  text-align: center;
  box-shadow: var(--shadow-high);
  font-weight: 500;
  display: flex;
  flex-direction: column;
  border-radius: 3rem;
  background: var(--lin-grad-smooth-orange);
  color: var(--deep-wine);
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: 500;
  padding: 0 4em 2em 4em;
  max-width: 480px;

  @media ${device.mobileS} {
    margin:0 auto 4em auto;
    padding: 0 2em 2em 2em;
  }

  @media ${device.laptop} {
    padding: 0 3em 2em 3em;
  }

  > .headshot {
    background: var(--lin-grad-smooth-orange);
    margin: -3em 2em 2em 2em;
    border-radius: 50%;
    overflow: hidden;
    border: 24px solid var(--orange);
    box-shadow: var(--shadow-low);
    align-self: center;
  }

  > .name {
    margin-top: 3em;
    font-size: 0.9rem;
    font-weight: 700;
    > span {
      display: block;
      font-style: italic;
      font-style: normal;
      font-weight: 300;
    }
  }
`;


const InfoBubble = (props) => {
  return (
    <Container>
      <Bubble>
        <Img
          className="headshot"
          fixed={props.headshot}
          alt="{props.name}'s headshot"
        />
        <b>
          Working with a personal instructor is the perfect kickstart to your
          fitness journey.
        </b>
        <hr />
        In my own experience, Personal Training provided a structured and
        personalized plan of action to loose my maternity weight before
        progressing on my own.
        <p className="name">
          Blanka Harvey <span>Personal Trainer & Zumba Specialist</span>
        </p>
        {/* <Button
          title="Ask About Personal Training"
          aria="Ask Blanka About Personal Training"
          type="general"
          destination="/contact"
        /> */}
      </Bubble>
    </Container>
  );
}


export default InfoBubble;