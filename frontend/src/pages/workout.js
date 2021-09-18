import { Link } from "gatsby";
import * as React from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import { DualSection } from "../styles/GridStyles";
import Header from "../components/Header";
import Container from "../styles/ContainerStyle";
import WorkoutList from "../components/workout/WorkoutList";

const Workout = ({ data }) => {
  console.log(data);
  const workouts = data.workouts.edges;
  return (
    <>
      <Helmet
        title="Free Online Workouts | Fitness Republic Gym "
        meta={[
          {
            name: "description",
            content:
              "A selection of workout plans including videos and instructions for you to carry out at our gym or at home",
          },
          // {
          //   name: "robots",
          //   content: "noindex",
          // },
          {
            name: "keywords",
            content:
              "workout, online workout, weight loss, lose weight, calorie control,fitness, weight lifting, cardio excercise, excercises, excersie plan, workout plan, lessons",
          },
        ]}
      />

      <Header
        title={
          <>
            Fitness Republic <span>Online Workouts</span>
          </>
        }
        subtitle={
          "Free workout plans for you to complete at our gym or at home"
        }
      />
      <Container>
        <DualSection>
          <WorkoutList workouts={workouts} />
        </DualSection>
      </Container>
    </>
  );
};

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
          setBuilder {
          _key
          set {
            _key
            setType
            setRepetitions
            setExcercise {
              _key
              repFields {
                minReps
                maxReps
                _key
              }
              excerciseReference {
                _key
                category
                id
                excerciseName
                introduction
                isActive
                metaTags
                note
                otherNames
                tips
                muscles {
                  secondary
                  primary
                  general
                  _key
                }
                substitution {
                  CloudVideo {
                    _key
                  }
                  slug {
                    current
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
`;
