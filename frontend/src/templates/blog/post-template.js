import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Helmet from 'react-helmet';

// import Layout from '../../../src/components/Layout';

const BlockContent = require('@sanity/block-content-to-react');
const client = require('@sanity/client')({
  projectId: 's1k3b826',
  dataset: 'production',
  useCdn: true
});


const serializers = {
  types: {
    code: props => (
      <pre data-language={props.node.language}>
        <code>{props.node.code}</code>
      </pre>
    )
  }
}

const BlockRenderer = props => {
  const {style = 'normal'} = props.node;

  if (/^h\d/.test(style)) {
    const level = style.replace(/[^\d]/g, '')
    return React.createElement(style, { className: `heading-${level}`}, props.children)
  }

  if (style === 'blockquote') {
    return <blockquote>- {props.children}</blockquote>
  }

  // Fall back to default handling
  return BlockContent.defaultSerializers.types.block(props)
}

const BlogPost = ({ data }) => {
  const { post } = data;
  return(
    <div>
      <Helmet>
          <title>{post.title}</title>
          <meta name="description" content={post.title} />
      </Helmet>
      <div id="main">
        <section>
          <Img fluid={post.mainImage.asset.fluid} />
          <div className="inner">
            <header className="major">
              <h1>{post.title}</h1>
            </header>
              <BlockContent blocks={post._rawBody} serializers={{types: {block: BlockRenderer}}} />
          </div>
        </section>
      </div>
    </div>
  );
}


// $slug: String! = expect the slug to be of type String and ! = required
export const query = graphql`
  query ($slug: String!) {
    post: sanityPost(slug: {
      current: {
      eq: $slug
      }
    }) {
      id
      title
      _rawBody
      publishedAt
      excerpt
        mainImage {
          asset {
		        fluid(maxHeight: 200) {
			        ...GatsbySanityImageFluid
              }
            }
          }
        }
    }
`;

export default BlogPost;