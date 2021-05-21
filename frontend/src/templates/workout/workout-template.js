import React from 'react';
import { graphql } from 'gatsby';

import Helmet from 'react-helmet';

import Layout from '../../components/Layout';

import WorkoutHeader from '../../components/workout/WorkoutHeader.js';
import SetList from '../../components/workout/SetList.js';

const Workout = ({ data }) => {
  const { workout } = data;
  return(
    <Layout>
      <Helmet>
          <title>{workout.name}</title>
          <meta name="description" content={workout.name} />
      </Helmet>
      <div id="main">
        <section>
          <WorkoutHeader image={workout.image.asset.fluid} title={workout.name} description={workout.description}/>
          <div className="inner">
            <SetList sets={workout.workoutBuilder} />
          </div>
        </section>
      </div>
    </Layout>
  );
}


// $slug: String! = expect the slug to be of type String and ! = required
export const query = graphql`
  query ($slug: String!) {
    workout: sanityWorkout(slug: {
      current: {
        eq: $slug
      }
    }) {
      id
      name
      description
      image {
          asset {
		        fluid(maxHeight: 400) {
			        ...GatsbySanityImageFluid
              }
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
          }
        }
      }
    }
`;

export default Workout;