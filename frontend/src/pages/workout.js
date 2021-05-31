import { Link } from "gatsby";
import * as React from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import { DualSection } from "../styles/GridStyles";
import Header from "../components/Header";
import Container from "../styles/ContainerStyle";
import BlogPostList from "../components/blog/BlogPostList";


const Blog = ({data}) => {
  const posts = data.posts.nodes;
  return (
    <>
      <Helmet
      title="Fitness Republic - Fitness Classes delivered in the gym and online"
      meta={[
        {
          name: "description",
          content:
            "We write articles on fitness, diet control, weight loss, working out all while promoting good health."
        },
        {
          name: "keywords",
          content:
            "weight loss, calories, low fat, workput, gym, ashby, ashby de la zouch, fitness, health, lose fat"
        }
      ]}
    />

      <Header
        title={
          <>
            the Fitness Republic <span>blog</span>
          </>
        }
        subtitle={"Articles about fitness, health and training"}
      />
      <Container>
        <DualSection>
          <BlogPostList posts={posts} />
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