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
            content: "Your Free Pass is on it's way",
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
            title="What Happens next?"
            subtitle="How to get the most out of your free pass"
            body={
              <>
                We will be in touch soon, usually via text message to set up a
                date and time for you to come into the gym for an induction.
                During the introduction you will learn how to get the most out
                of our equipment so that you can exercise safely and with
                confidence. We will talk you through our Covid safety procedures
                and demonstrate how we keep our gym clean and safe for all our
                customers. Your instructor will guide you at your pace, answer
                all the questions which you may have and help you on your way to
                <strong> exercise safely and confidently</strong>.
              </>
            }
          />
          <Image
            pos="1/-1"
            pic={data.induction.childImageSharp.gatsbyImageData}
            alt="Simon and his new client smile at the camera during an induction session"
            blurb={
              <>
                <strong>Simon </strong>demonstrating how to use the gym
                equipment to a <strong>new client</strong> during her induction
                at the gym
              </>
            }
          />

          <TextSection
            pos="2/5"
            title="Everybody is different"
            subtitle="Would you prefer a private induction?"
            body={
              <>
                We have made every effort to foster a relaxed and inclusive
                atmosphere here at Fitness Republic we want to ensure you feel
                as comfortable as possible. We understand that coming to the gym
                for the first time can be daunting experience. We have made
                every effort to foster a relaxed and inclusive atmosphere here
                at Fitness Republic we want to ensure you feel as comfortable as
                possible. If you would prefer to come in at a less busy time
                then please let us know by either emailing us at{" "}
                <a href="mailto:info@fitnessrepublic.co.uk" rel="noopener">
                  info@fitnessrepublic.co.uk
                </a>{" "}
                or by giving us a call{" "}
                <a href="tel:+4401530413330"> 01530 413330</a>. We will be in
                contact soon so we can chat then.
              </>
            }
          />
          <Pullquote
            pos={"2/-1"}
            body="I want to ensure you feel comfortable in our Gym. If there is anything you want to discuss before coming in then feel free to contact me"
            attribution={
              <>
                <strong>Simon Pellecchia</strong> // Director and Personal
                Trainer
              </>
            }
          />
          <ShareButtons />
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
