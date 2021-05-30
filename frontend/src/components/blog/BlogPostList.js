import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";

const Post = styled.section`
  background: var(--white);
  border-radius: 8px;
  overflow: hidden;

  > div {
    padding: 1em;
  }

  h3 {
    margin:0;
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
        <ul className="actions">
          <li>
            <Link to={`/blog/post/${post.slug.current}`} className="button">
              Continue Reading
            </Link>
          </li>
        </ul>
      </div>
    </Post>
  );
}


const Posts = styled.section`
  grid-column: ${(props) => (props.pos ? props.pos : "1 / -1")};
  display: flex;
  flex-direction: row;
  gap: 2em 2em;
  justify-content: space-evenly;
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