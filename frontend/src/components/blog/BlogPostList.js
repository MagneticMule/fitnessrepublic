import React from 'react';

import { Link } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image";


const SinglePost = ({post}) => {
  return (
    <section>
      <GatsbyImage image={post.mainImage.childImageSharp.gatsbyImageData} className="image" />
      <div className="content">
        <div className="inner">
            <header className="major">
              <Link to={`/blog/post/${post.slug.current}`}>
                <h3>{post.title}</h3>
              </Link>
            </header>
            <p>{post.excerpt}</p>
            <ul className="actions">
              <li><Link to={`/blog/post/${post.slug.current}`} className="button">Continue Reading</Link></li>
            </ul>
          </div>
        </div>
    </section>
  );
}


const BlogPostList = ({posts}) => {
  return(
    <section id="posts" className="spotlights inner">
      {posts.map(post=>(
          <SinglePost key={post.id} post={post}/>
      ))}
    </section>
  );
}


export default BlogPostList;