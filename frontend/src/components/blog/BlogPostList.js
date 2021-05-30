import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";

const Post = styled.section`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  background: var(--background-gradient);
  border-radius: 8px;
  overflow: hidden;
  min-width: 300px;
  box-shadow: var(--close-shadow);
  > div {
    padding: 2em;
    color: var(--white);
  }

  h3 {
    margin: 0;
    font-weight: 500;
    font-size: 1.8rem;
    text-shadow: var(--shadow-low);
  }

  > a {
    text-align: right;
    margin: auto 2em 2em 1em;
    justify-self: flex-end;
    font-weight: 500;
    text-decoration: underline;
    text-decoration-thickness: 0.15em;
    text-underline-offset: 6px;

    &:hover {
      color: var(--white);
    }
  }
`;



const SinglePost = ({post}) => {
  return (
    <Post>
      <GatsbyImage image={post.mainImage.asset.gatsbyImageData} />
      <div>
        <header>
          <Link to={`/blog/post/${post.slug.current}`}>
            <h3>{post.title}</h3>
          </Link>
        </header>
        <p>{post.excerpt}</p>
      </div>
      <Link to={`/blog/post/${post.slug.current}`}>Continue Reading</Link>
    </Post>
  );
}


const Posts = styled.section`
  grid-column: ${(props) => (props.pos ? props.pos : "1 / -1")};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: row;
  gap: 4em 4em;
  justify-content: space-evenly;
  flex-wrap: wrap;
  > * {
    flex-grow: 1;
    flex-basis: 0;
  }
`;

const BlogPostList = ({posts}) => {
  return(
    <Posts>
      {posts.map(post=>(
          <SinglePost key={post.id} post={post}/>
      ))}
    </Posts>
  );
}


export default BlogPostList;