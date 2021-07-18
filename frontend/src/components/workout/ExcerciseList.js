import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import Video from "../Video.js";

const Card = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  color: #240519;
  border-radius: 16px;
  margin: 4rem 0;
  background: linear-gradient(180.14deg, #332266 -1.96%, #220033 96.02%);
  box-shadow: 0 0px 16px rgba(0, 0, 0, 0.1),
    0 70px 56px -50px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  h3 {
    text-transform: uppercase;
    font-size: 2rem;
    font-weight: 900;
    margin: 0;
    color: white;
  }

  .reps {
    color: lightgrey;
    font-size: 1.2rem;
    font-weight: bold;
    span {
      color: orange;
    }
    margin: 0 0 1rem 0;
  }

  .instructions {
    color: white;
    margin: 2rem 0;
    font-size: 1.4rem;
  }

  form {
    display: flex;
    justify-content: flex-end;
    color: white;
    > label {
      font-size: 1.66rem;
      padding: 0 1rem 0 0;
    }
  }
  input {
    border-radius: 16px;
    padding: 0.5em;
  }
`;

const Content = styled.div`
  margin: 4em;
`;

const ExcerciseList = ({ excercises }) => {
  return (
    <>
      {excercises.map((excercise) => (
        <Card>
          {/* <Video videoSrcURL={excercise.video} controls/> */}
          {excercise.CloudVideo && (
            <video source src={excercise.CloudVideo.url} controls loop />
          )}
          <Content>
            <h3>{excercise.excerciseName}</h3>
            <div className="reps">
              Repetitions: <span>{excercise.repetitions}</span>
            </div>
            <div className="instructions">
              <strong>Instructions:</strong>{" "}
              <span>{excercise.instructions}</span>
            </div>
            <hr />
            <form>
              <label htmFor="reps"> How many reps did you do?</label>
              <input id="reps" type="number"></input>
            </form>
          </Content>
        </Card>
      ))}
    </>
  );
};

export default ExcerciseList;
