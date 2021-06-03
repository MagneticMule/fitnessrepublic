import { Link } from "gatsby";
import * as React from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import { DualSection } from "../styles/GridStyles";
import Header from "../components/Header";
import Container from "../styles/ContainerStyle";
import WorkoutList from "../components/workout/WorkoutList";


const Workout = ({data}) => {
  console.log(data);
  const workouts = data.workouts.edges;
  return (
    <>
      <Helmet
      title="Fitness Republic - Free Online Workouts"
      meta={[
        {
          name: "description",
          content:
            "A selection of workout plans including videos and instructions for you to carry out at our gym or at home"
        },
        {
          name: "keywords",
          content:
            "workout, online workout, weight loss, lose weight, calorie control,fitness, weight lifting, cardio excercise, excercises, excersie plan, workout plan, lessons"
        }
      ]}
    />

      <Header
        title={
          <>
            Fitness Republic <span>Online Workouts</span>
          </>
        }
        subtitle={"Free workout plans for you to complete at our sym or at home"}
      />
      <Container>
        <DualSection>
          <WorkoutList workouts={workouts} />
        </DualSection>
      </Container>
    </>
  );
}


export default Workout;

export const query = graphql`
  query WorkoutQuery {
    workouts: allSanityWorkout {
      edges {
        node {
          id
          _id
          description
          slug {
            current
          }
          image {
            asset {
              _id
              altText
              description
              gatsbyImageData(
                width: 1200
                height: 800
                fit: FILLMAX
                placeholder: BLURRED
              )
            }
          }
          name
          target {
            lower_body
            upper_body
          }
          workoutBuilder {
            setName
            repetitions
            description
            isActive
            _key
            excercise {
              _id
              excerciseName
              instructions
              isActive
              repetitions
              video
              CloudVideo {
                _key
                url
                public_id
                width
                format
                height
              }
            }
          }
        }
      }
      totalCount
    }
  }
`;