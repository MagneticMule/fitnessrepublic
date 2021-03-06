import { Link } from "gatsby";
import * as React from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import { DualSection } from "../styles/GridStyles";
import Header from "../components/Header";
import Container from "../styles/ContainerStyle";
import BlogPostList from "../components/blog/BlogPostList";

const Blog = ({ data }) => {
  const posts = data.posts.nodes;
  return (
    <>
      <Helmet
        title="Health and Fitness Articles | Fitness Republic Ashby "
        meta={[
          {
            name: "description",
            content:
              "We write articles on fitness, diet control, weight loss and training all while promoting good health.",
          },
          {
            name: "keywords",
            content:
              "weight loss, calories, low fat, workout, gym, ashby, ashby de la zouch, fitness, health, lose fat, blog, articles, low carb, wellbeing, well being",
          },
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
};

export default Blog;

export const query = graphql`
  query BlogQuery {
    posts: allSanityPost(sort: { fields: _createdAt, order: ASC }) {
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
              width: 1200
              height: 800
              fit: FILLMAX
              placeholder: BLURRED
            )
          }
        }
      }
    }
  }
`;
