import React from 'react'
import styled from 'styled-components'
import { device } from "../../../styles/DeviceSizes";
const Bullet = styled.div`
  margin: 0 0 2em 0;
  justify-content: top;
  display: flex;
  flex-direction: column;
  grid-column: ${props => (props.pos ? props.pos : "2/4")};

  @media ${device.mobileM} {
    grid-column: 1/-1;
  }

  @media ${device.laptop} {
    grid-column: ${props => (props.pos ? props.pos : "1/2")};
    margin-bottom: 0;
  }

  @media ${device.laptopL} {
  }

  @media ${device.desktop} {
  }
`;

const BulletPoint = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--orange);
  border-radius: 50%;
  height: 7.5em;
  width: 7.5em;
  color: white;
  font-size: 2rem;
  font-weight: 500;
  text-transform: uppercase;
  line-height: 1;

  border: 1em solid var(--grey);

  > span {
    background-color: white;
    color: transparent;
    text-shadow: 2px 2px 0px 0px rgba(0, 0, 0, 0.25);
    background-clip: text;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    font-size: 5rem;
    font-weight: 700;
  }
`;


const Body = styled.div`
  align-self: top;
  font-size: 1.2rem;
  > h3 {
    color: var(--orange);
    font-weight:500;
    text-transform: capitalize;
    letter-spacing: -1px;
  }
`;


const SuperBullet = props =>{

  return (
    <Bullet pos={props.pos} id={props.id}>
      <BulletPoint>
        step <span>{props.number}</span>
      </BulletPoint>
      <Body>
        <h3>{props.heading}</h3>
        {props.body}
      </Body>
    </Bullet>
  )
}


export default SuperBullet;