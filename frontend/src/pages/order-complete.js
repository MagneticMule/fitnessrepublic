import { Link } from "gatsby";
import React from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";

import { DualSection } from "../styles/GridStyles";
import Header from "../components/Header";
import Container from "../styles/ContainerStyle";
import TextSection from "../components/TextSection";
import TextCta from "../components/widgets/TextCta";
import Image from "../components/widgets/Image";
import ShareButtons from "../components/ShareButtons";
import Pullquote from "../components/widgets/text/Pullquote";

import SEO from "../components/Seo";

const Pass = ({ data, name }) => {
  return (
    <>
      <Helmet
        title="Fitness Republic Gym | Thank You"
        meta={[
          // {
          //   name: "robots",
          //   content: "noindex",
          // },
          {
            name: "description",
            content: "Your Merch is on it's way",
          },
          {
            name: "keywords",
            content:
              "free pass, free, gym membership, ashby de la zouch, ashby, seven days free, free classes",
          },
        ]}
      ></Helmet>

      {/* <Header
        title={
          <>
            Your <span>Free Pass</span> is on it's way
          </>
        }
        subtitle={"we will be in touch soon"}
        cta={"none"}
      /> */}
      <Container>
        <DualSection>
          <Image
            pic={data.staff.childImageSharp.gatsbyImageData}
            alt="The fitness republic staff smile at the camera in a group shot"
            blurb=""
          />
          <TextCta introText="Give us a call" />
          <TextSection
            pos="2/5"
            title="We have your order!"
            subtitle="we will be in touch soon"
            body={
              <>
                Thank you again for your order. If you have any problems or
                queries feel free to contact us.
              </>
            }
          />
        </DualSection>
      </Container>
    </>
  );
};

export default Pass;

export const query = graphql`
  {
    induction: file(
      relativePath: { eq: "gym/simon-induction-fitness-reoublic-gym-ashby.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
      }
    }
    staff: file(
      relativePath: { eq: "staff/group-shot-fitness-republic-gym-ashby.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
      }
    }
  }
`;
