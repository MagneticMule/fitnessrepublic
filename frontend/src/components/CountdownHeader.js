import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import DualSection from "../styles/GridStyles";
import Button from "./widgets/Button";
import { device } from "../styles/DeviceSizes";
import Container from "../styles/ContainerStyle";
import countDownTimer from "../utils/countdown";
import { FaFileExcel } from 'react-icons/fa';

/* local components */
// const Container = styled.div`
//   grid-column: 2/-1;
//   max-width: 1400px;
// `;

const CountdownContainer = styled.div`
  overflow: hidden;
  z-index: 0;
  display: block;
  background: black;

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
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  text-align:center;
  background: linear-gradient(
      262.16deg,
      rgba(255, 107, 0, 0.8) 0.74%,
      rgba(255, 255, 255, 0.9) 99.73%
    ),
    linear-gradient(
      98deg,
      rgba(0, 13, 129, 0.5) 0%,
      rgba(255, 255, 255, 0.9) 99.66%
    ),
    linear-gradient(0deg, #410e23, #410e23);

  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  -moz-text-fill-color: transparent;
  text-shadow: 1px 1px 0px 0px rgba(0, 0, 0, 0.25) inset;
  filter: drop-shadow(1px 1px 0 rgba(255, 255, 255, 0.2));
  color: #770264;
  letter-spacing: -0.05em;
  text-transform: capitalize;
  margin:0;

  span {
    font-weight: 900;
  }

  @media ${device.mobileS} {
    font-size: 3.209rem;
  }

  @media ${device.laptop} {
    font-size: 7.209rem;
  }

  @media ${device.laptopL} {
    font-size: 9.209rem;
  }
`;

const Subtitle = styled.p`
  text-align:center;
  width: fit-content;
  background: linear-gradient(
    110deg,
    rgba(240, 180, 150, 1) 0%,
    rgba(255, 200, 250, 1) 100%
  );
  -webkit-text-fill-color: white;
  -webkit-background-clip: text;
  background-clip: text;
  -moz-text-fill-color: transparent;
  font-weight: bold;
  font-size: 1.333rem;
  font-weight: 200;
  strong {
    -webkit-text-fill-color: transparent;
    text-transform: uppercase;
    font-weight: 900;
  }
  >a {

  -webkit-text-fill-color: white;
  background: var(--orange);
  margin: 2em 0 1em 0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 32px;
  display: inline-block;
  justify-content: space-between;
  font-weight: 700;
  font-size: 1.1rem;
  text-transform: uppercase;
  color: var(--white);
  padding: 0.8em 2em;
  cursor: pointer;
  transition: all 0.2s;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  border: 1px solid var(--white);
  // &:hover {
  //   color: var(--white);
  //   box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.3);
  // }
  }
`;

const Countdown = styled.h2`
  & + & {
    border-left: 4px solid white;
  }

  padding:0 .4em;
  text-align: center;
  color: #bbb;
  letter-spacing: -0.05em;
  text-transform: capitalize;

  span {
    font-weight: 900;
    color: #ddd;
    padding-bottom: .1rem;
  }

  > div {
    font-size:3rem;
    text-transform:uppercase;

  @media ${device.mobileS} {
    font-size:1.44rem;
  }

  @media ${device.laptop} {
    font-size:2.2rem;
  }

  @media ${device.laptopL} {
    ffont-size:3rem;
  }
  }

  @media ${device.mobileS} {
    font-size: 2.209rem;
  }

  @media ${device.laptop} {
    font-size: 4.209rem;
  }

  @media ${device.laptopL} {
    font-size: 6.209rem;
  }
  `;

const DateContainer = styled.div`
  text-align:center;
  display:flex;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction:column;
`;

const FinePrint = styled.p`
  color: var(--dark-grey);
  text-align:center;
  max-width:75%;
`;

const CountdownHeader = ({ title, subtitle, cta }) => {
  let ctaButtonPrimary = "";
  let ctaButtonSecondary = "";
  if (cta !== "none") {
    ctaButtonPrimary = (
      <Button title={<>Get one year adult membership for <strong>£219</strong></>} destination={"https://staging.fitnessrepublic.co.uk/shop"} />
    );
    ctaButtonSecondary = (
      <Button style="minor" title={<>Get One Year Student Membership for <strong>£199</strong></>} destination={"https://staging.fitnessrepublic.co.uk/shop"} />
    );
  }
  const [time, setTime] = useState(countDownTimer('2021-11-29'));
  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(countDownTimer('2021-11-29'));
    }, 1000);
    return () => clearTimeout(timer);
  });
  return (
    <CountdownContainer>
      <Container>
        <Contents>
          <Subtitle><strong>Time is running out!</strong></Subtitle>
          <Title>{title}</Title>
          <DateContainer>
            <Countdown>
              <span>{time.days}</span>
              <div>Days</div>
            </Countdown>
            <Countdown>
              <span>{time.hours}</span>
              <div>Hours</div>
            </Countdown>
            <Countdown>
              <span>{time.minutes}</span>
              <div>Mins</div>
            </Countdown>
            <Countdown>
              <span>{time.seconds}</span>
              <div>Secs</div>
            </Countdown>
          </DateContainer>
          <Subtitle>{subtitle}</Subtitle>
          <Subtitle>
            {/* {ctaButtonPrimary} {ctaButtonSecondary} */}
            {' '}
            <a
              aria-label="Buy our black friday membership offer on the fitness republic store"
              href="https://staging.fitnessrepublic.co.uk/shop">
              BUY IT NOW
            </a>
            {/* <br />
            <a
              aria-label="Call the gym and reserve your black friday membership"
              href="tel:+4401530413330"
              rel="noopener noreferrer"
            >
              Or call us on{' '}01530 413330
            </a> */}
          </Subtitle>
          <FinePrint>
            *Buying our black friday yearly membership offer will <strong>save you over £176</strong> compared to our standard monthly plan.
            {/* <hr />
            Student membership is dependant on you holding full time student status at a UK school, college or university.
            We may ask you for some form of student ID on your first visit. */}
          </FinePrint>
        </Contents>
      </Container>
    </CountdownContainer >
  );
};

export default CountdownHeader;
