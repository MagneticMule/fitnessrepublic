import React from "react";
import { graphql } from "gatsby";
import Container from "../../styles/ContainerStyle";
import Helmet from "react-helmet";
import WorkoutHeader from "../../components/workout/WorkoutHeader.js";
import SetList from "../../components/workout/SetList.js";

const Workout = ({ data }) => {
  const { workout } = data;
  return (
    <>
      <Helmet>
        <title>{workout.name}</title>
        <meta name="description" content={workout.description} />
      </Helmet>

      <section>
        <WorkoutHeader
          image={workout.image.asset.gatsbyImageData}
          title={workout.name}
          description={workout.description}
        />
        <Container>
          <div className="inner">
            <SetList sets={workout.setBuilder} />
          </div>
        </Container>
      </section>
    </>
  );
};

// $slug: String! = expect the slug to be of type String and ! = required
export const query = graphql`
  query($slug: String!) {
    workout: sanityWorkout(slug: { current: { eq: $slug } }) {
      id
      name
      description
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
`;

export default Workout;
