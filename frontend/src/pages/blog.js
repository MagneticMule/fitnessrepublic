import { Link } from "gatsby";
import * as React from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import { DualSection } from "../styles/GridStyles";
import Header from "../components/Header";
import Container from "../styles/ContainerStyle";
import TextSection from "../components/TextSection";
import Image from "../components/widgets/Image";
import Pullquote from "../components/widgets/text/Pullquote";



const Blog = () => {
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
          This is the Blog Entries Component
        </DualSection>
      </Container>
    </>
  );
}


export default Blog;