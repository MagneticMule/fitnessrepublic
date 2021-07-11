import React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Helmet from "react-helmet";
import Image from "../../components/widgets/Image";
import TextSection from "../../components/TextSection";
import Container from "../../styles/ContainerStyle";
import { DualSection } from "../../styles/GridStyles";

const BlockContent = require("@sanity/block-content-to-react");
const client = require("@sanity/client")({
  projectId: "s1k3b826",
  dataset: "production",
  apiVersion: "2021-03-25",
  useCdn: true,
});

const BlockRenderer = (props) => {
  const { style = "normal" } = props.node;
  const { text } = props.node;a
  console.log(text);

  const re = new RegExp("Fitness Republic", "i");

  if (/^h\d/.test(style)) {
    const level = style.replace(/[^\d]/g, "");
    return React.createElement(
      style,
      { className: `heading-${level}` },
      props.children
    );
  }

  if (style === "blockquote") {
    return <blockquote>- {props.children}</blockquote>;
  }

  // if we find an occurance of the string "Fitness Republic" return a link to the main index page
  if (style === "strong") {
    if (text === re) {
      return <Link to="/">Fitness Republic</Link>;
    }
    return <strong>{props.children}</strong>;
  }

  if (style === "em") {
    return <em>{props.children}</em>;
  }

  // Fall back to default handling
  return BlockContent.defaultSerializers.types.block(props);
};

const serializers = {
  types: {
    strong: (props) => (
      <pre data-language={props.node.language}>
        <strong>{props.node.strong}</strong>
      </pre>
    ),
  },
};

const BlogPost = ({ data }) => {
  const { post } = data;
  return (
    <>
      <Helmet>
        <title>{post.title}</title>
        <meta name="description" content={post.title} />
      </Helmet>
      <Container>
        <DualSection>
          {<Image pic={post.mainImage.asset.gatsbyImageData} />}

          <TextSection
            pos="2/4"
            title={post.title}
            body={
              <>
                <BlockContent
                  blocks={post._rawBody}
                  serializers={
                    ({ types: { block: BlockRenderer } }, { serializers })
                  }
                />
              </>
            }
          />
        </DualSection>
      </Container>
    </>
  );
};

// $slug: String! = expect the slug to be of type String and ! = required
export const query = graphql`
  query($slug: String!) {
    post: sanityPost(slug: { current: { eq: $slug } }) {
      id
      title
      _rawBody
      publishedAt
      excerpt
      mainImage {
        asset {
          gatsbyImageData(
            width: 1800
            height: 900
            fit: FILLMAX
            placeholder: BLURRED
          )
        }
      }
    }
  }
`;

export default BlogPost;
