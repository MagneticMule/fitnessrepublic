import { Link } from "gatsby";
import * as React from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import { DualSection } from "../styles/GridStyles";
import Header from "../components/Header";
import Container from "../styles/ContainerStyle";
import BlogPostList from "../components/workout/WorkoutList";


const Blog = ({data}) => {
  const posts = data.posts.nodes;
  return (
    <>
      <Helmet
      title="Fitness Republic - Free Online Wourkouts"
      meta={[
        {
          name: "description",
          content:
            "A selection of workput plans including videos and instructions for you to carry out at our gym or at home"
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
          {/* <BlogPostList workouts={workouts} /> */}
        </DualSection>
      </Container>
    </>
  );
}


export default Blog;

export const query = graphql`
 query WorkoutQuery {
    posts: allSanityPost {
      nodes {
        id
        title
        slug {
          current
        }
        excerpt
        mainImage {
          asset {
		        gatsbyImageData(
              width:1200,
              height:800,
              fit: FILLMAX,
              placeholder: BLURRED),
              }
            }
          }
      }
    }
`;