import { Link } from "gatsby";
import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { BiTime, BiHealth } from "react-icons/bi";

const Container = styled.section`
  grid-column: ${(props) => (props.pos ? props.pos : "1 / -1")};
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-flow: column;
  grid-auto-columns: 300px 100px;
  gap: 2em 2em;
  grid-auto-flow: column dense;
`;

function SingleExcercise({ excercise }) {
  return (
    <div className="">
      <h4>{excercise.excerciseName}</h4>
      <p>Repetitions: {excercise.repetitions}</p>
    </div>
  );
}

function ExcerciseList({ excercises }) {
  return (
    <>
      {excercises.map((excercise) => (
        <ul>
          <li>
            <SingleExcercise excercise={excercise} />
          </li>
        </ul>
      ))}
    </>
  );
}

function SingleSet({ set }) {
  return (
    <>
      <h3>{set.setName}</h3>
      <p>
        <ExcerciseList excercises={set.excercise} />
      </p>
    </>
  );
}

function SetList({ sets }) {
  return (
    <>
      {sets.map((set) => (
        <ul>
          <li>
            <SingleSet set={set} />
          </li>
        </ul>
      ))}
    </>
  );
}

const Card = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid black;
  font-family: "Lato", sans-serif;
  margin: 0 auto;
  max-width: 900px;
  min-width: 360px;
  color: var(--white);
  background: linear-gradient(0deg, #202020 0%, #212121 100%);
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.6), 0 8px 32px rgba(0, 0, 0, 0.25);
  transition: 0.6s;

  @media (min-width: 700px) {
    flex-direction: row;
  }

  .card__image {
    object-fit: cover;
    min-width: 0;
    min-height: 0;
    flex-basis: 300px;
    vertical-align: middle;
  }

  :hover {
    border: 0.5px solid orange;
    background: linear-gradient(0deg, #232020 0%, #551133 100%);
  }

  h2.card__title {
    font-size: 1.2rem;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--white);
    margin: 0;
    padding: 0;
  }

  .card__content {
    font-family: "Roboto", sans-serif;
    flex-basis: 100%;
    font-size: 0.8rem;
    padding: 1.6rem;
    line-height: 1.6;
  }

  ul.card__content__excercise-list {
    padding-top: 1rem;
    > li {
      display: inline-block;
    }
  }

  .card__content__footer {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    font-size: 0.76rem;
    border-top: 1px solid #665656;
    padding-top: 1rem;
  }

  .card__content__workout-time {
    margin: 0;
    display: inline-block;

    > .icon {
      font-size: 1rem;
      color: orange;
      margin-right: 2px;
      vertical-align: middle;
      bottom: 1px;
    }
    > span {
      font-weight: bold;
    }
  }

  .card__content__workout-difficulty {
    > .icon {
      font-size: 1rem;
      color: cornflowerblue;
      margin-right: 5px;
      vertical-align: middle;
      bottom: 2px;
    }
    > span {
      font-weight: bold;
    }
  }
`;

function SingleWorkout({ workout }) {
  const sets = workout.node.workoutBuilder;
  return (
    <Link to={`/workout/${workout.node.slug.current}/`}>
      <Card>
        <GatsbyImage
          image={workout.node.image.asset.gatsbyImageData}
          className="card__image"
          alt={workout.node.name}
        />
        <div className="card__content">
          <h2 className="card__title">{workout.node.name}</h2>
          <ul className="card__content__excercise-list">
            <li>Burpees</li>
            <li>Laboriosam hic</li>
            <li>Doloremque error</li>
            <li>Quaerat ipsam</li>
            <li>Aspernatur quam</li>
            <li>Sapiente officiis</li>
            <li>Neque recusandae</li>
            <li>Accusamus quisquam</li>
          </ul>
          <div className="card__content__footer">
            <div className="card__content__workout-time">
              <BiTime className="icon" /> <span>30</span> minutes
            </div>

            <div className="card__content__workout-difficulty">
              <BiHealth className="icon" />
              Difficulty <span>6/10</span>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
}

export default function WorkoutList({ workouts }) {
  return (
    <Container>
      {workouts.map((workout) => (
        <li>
          <SingleWorkout key={workout.node.id} workout={workout} />
        </li>
      ))}
    </Container>
  );
}
