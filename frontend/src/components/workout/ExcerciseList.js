import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Video from '../Video.js';

const Card = styled.div`
  border-radius: 16px;
  padding: 2rem;
  margin: 4rem 0;
  background: #eee;
  box-shadow: 0 0px 16px rgba(0,0,0,0.1), 0 70px 56px -50px rgba(0,0,0,0.1);

  h3 {
    text-transform: uppercase;
    font-size: 2rem;
    font-weight: 900;
    margin: 0;
  }

  .reps {
    font-size: 1.2rem;
    font-weight: bold;
    color: orange;
    span {
      color:black
    }
    margin: 0 0 1rem 0;
  }

  .instructions {
    padding: 1rem;
    margin: 2rem 0;
    font-size: 1.4rem;
  }
`;

const ExcerciseList = ( {excercises} ) => {
  return (
    <>
      {excercises.map((excercise)=>(
        <Card>
          <h3>{excercise.excerciseName}</h3>
          <div className="reps">Repetitions: <span>{excercise.repetitions}</span></div>
          <Video videoSrcURL={excercise.video}/>
          <div className="instructions"><strong>Instructions:</strong> <span>{excercise.instructions}</span></div>
          <hr/>
          How many reps did you do?
        </Card>
      ))}
</>
  );
}

export default ExcerciseList;