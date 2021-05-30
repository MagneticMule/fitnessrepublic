import { Link } from "gatsby";
import * as React from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import { DualSection } from "../styles/GridStyles";
import Header from "../components/Header";
import Container from "../styles/ContainerStyle";
import BlogPostList from "../components/blog/BlogPostList";


const Blog = ({data}) => {
  console.log(data);
  const posts = data.posts.nodes;
  return (
    <>
      <Header
        title={
          <>
            Articles about <span>fitness and health</span>
          </>
        }
        subtitle={"Group fitness training delivered both in-gym and online"}
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
 query BlogQuery {
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
              width:900,
              height:500,
              fit: FILLMAX,
              placeholder: BLURRED),
              }
            }
          }
      }
    }
`;