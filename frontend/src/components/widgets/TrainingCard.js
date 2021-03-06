import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-weight: 500;
  font-size: 1.1rem;
  min-height: 360px;
  margin: 2em 0;
  color: var(--white);
  background: var(--orange);
  border-radius: 32px;
  max-width: 340px;
  overflow: hidden;
  border: 2px solid var(--white);
  margin-bottom: _size(element-margin);
  padding: 1.5em 1.5em 2em 1.5em;
  font-family: Nunito, Lato, "Gill Sans", "Gill Sans MT", Calibri,
    "Trebuchet MS", sans-serif;
  text-align: left;
  box-shadow: 19px 25px 56px -31px rgba(255, 0, 214, 0.31),
    34px 26px 39px -9px rgba(0, 0, 0, 0.25);

  > :last-child,
  > :last-child > :last-child,
  > :last-child > :last-child > :last-child {
    margin-bottom: 0;
  }

  li {
    list-style-type: disc;
    list-style-position: inside;
  }

  > hr {
    margin: 1em 0;
  }
  > h3 {
    margin: 1em 0 0 0;
    color: white;
    text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.2) inset;
    font-size: 2rem;
    font-weight: 600;
    letter-spacing: 0;
    line-height: 1;
    > span {
      font-size: 0.6em;
      padding-top: 0.3em;
      font-weight: normal;
      display: block;
      text-shadow: 2px 2px 1px 0 rgba(0, 0, 0, 0.3);
    }
  }

  > .save {
    font-size: 1.5rem;
    display: block;
    color: white;
    box-sizing: border-box;
  }

  > div.price {
    display: inline-block;
    > span {
      color: white;
      white-space: nowrap;
      display: block;
      font-weight: 700;
      font-size: 2.4rem;
      text-transform: uppercase;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
  }

  div.description {
    min-height: 180px;
  }
`;

const GoldCard = styled(Card)`
  background: linear-gradient(
      137.32deg,
      rgba(255, 255, 255, 0.052) 31.46%,
      rgba(255, 255, 255, 0) 31.47%
    ),
    linear-gradient(340.96deg, #340e41 1.58%, #edded8 101.38%);
`;

const Button = styled.div`
  text-align: center;
  > a {
    margin: 0 auto;
    width: 100%;
    margin: 2em 0 1em 0;
    background: var(--lin-grad-smooth-orange);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    border-radius: 32px;
    display: inline-block;
    font-weight: 700;
    font-size: 1rem;
    text-transform: uppercase;
    color: white;
    padding: 0.8em 2em;
    cursor: pointer;
    transition: all 0.2s;
    text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    border: 2px solid var(--white);
    &:hover {
      box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.3);
    }
  }
`;

const TrainingCard = ({ training }) => {
  return (
    <Card>
      <h3>{training.title}</h3>
      <hr />
      <div className="description">{training.description}</div>
      <hr />
      <div className="price">{training.cost}</div>
      <ul>
        {training.bullets.map((bullet) => (
          <li>{bullet}</li>
        ))}
      </ul>
      <div className="price">{training.price}</div>
      <p>{training.paymethod}</p>
      <p>Total Cost: {training.totalcost}</p>
      <Button>
        <a
          aria="Takes you to our general contact form so that you can contact us about personal training oprions"
          href="/training/#PTForm"
          rel="noopener"
        >
          Contact Us
        </a>
      </Button>
    </Card>
  );
};

export default TrainingCard;
