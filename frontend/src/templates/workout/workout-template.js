import React from 'react';
import { graphql } from 'gatsby';
import Container from "../../styles/ContainerStyle";
import Helmet from 'react-helmet';
import WorkoutHeader from '../../components/workout/WorkoutHeader.js';
import SetList from '../../components/workout/SetList.js';

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
            <SetList sets={workout.workoutBuilder} />
          </div>
        </Container>
      </section>
    </>
  );
}


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
      workoutBuilder {
        isActive
        setName
        description
        repetitions
        excercise {
          video
          repetitions
          instructions
          excerciseName
          CloudVideo {
            _key
            url: secure_url
            public_id
            width
            format
            height
          }
        }
      }
    }
  }
`;

export default Workout;