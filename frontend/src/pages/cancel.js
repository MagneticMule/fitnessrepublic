import { Link } from "gatsby";
import React from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";

import { DualSection } from "../styles/GridStyles";
import Header from "../components/Header";
import Container from "../styles/ContainerStyle";
import TextSection from "../components/TextSection";
import Image from "../components/widgets/Image";
import ImageGallery from "../components/ImageGallery";
import Pullquote from "../components/widgets/text/Pullquote";
import Button from "../components/widgets/Button";
import SuperBullet from "../components/widgets/text/SuperBullet";
import ReviewSection from "../components/ReviewSection";
import InfoBubble from "../components/InfoBubble";
import IntroText from "../components/widgets/text/IntroText";
import MembershipSection from "../components/MembershipSection";

import FormSevenDayPass from "../components/FormSevenDayPass";

const Pass = ({ data }) => {
  return (
    <>
      <Helmet
        title="Free Seven Day Pass | Fitness Republic - Ashby Gym"
        meta={[
          {
            name: "description",
            content:
              "Not all things were meant to last. Here you can cancel your membership with us painlessly and without any harrasment or confusing questions.",
          },
          {
            name: "keywords",
            content: "cancel membership",
          },
        ]}
      ></Helmet>

      <Header
        title={
          <>
            Fitness Republic <span>Cancellation Request</span>
          </>
        }
        subtitle={"not all things were meant to last"}
      />
      <Container>
        <DualSection>
          <TextSection
            pos="2/5"
            title="Your Fitness Republic Journey"
            subtitle="Cancel your membership with us"
            body={
              <>
                We
                know how frustrating it can be to cancel a gym membership, we
                have heard the stories! With this in mind we want to make the
                cancellation process as smooth and as painless as possible for you. <br />
                We just have a few questions to ask you before we can
                process your membership cancellation request.
                <hr />
                If you prefer to chat to a real life human being you can{" "}
                <strong>
                  call us directly on
                  <a
                    aria-label="Call the gym to chat to one of our team"
                    href="tel:+4401530413330"
                    rel="noopener"
                  >
                    {" "}
                    01530 413330
                  </a>
                </strong>{" "}
                or simply pop into the gym anytime between{" "}
                <strong>7.00 AM and 8.00 PM</strong> for an informal chat with
                one of the team.
              </>
            }
          />

          {/* <IntroText text="want to try us out for free? Get access to all our facilities including our state of the art gym, fitness classes and a support from our expert staff for seven days at no cost and with no commitment." /> */}
          <SuperBullet
            id="getstarted"
            pos="2/4"
            number="01"
            heading="Name and email"
            body={<></>}
          />
          <FormSevenDayPass />
          <SuperBullet
            pos="2/4"
            number="02"
            heading="Come in for an Induction"
            body={
              <>
                Whether you are an absolute beginner or an experienced gym user,
                we will offer you a free induction as part of your membership
                package. You will learn how to get the most out of our equipment
                so that you can exercise safely and with confidence. We will
                talk you through our Covid safety procedures and demonstrate how
                we keep our gym clean and safe for all our customers. If you
                would prefer a private induction Your instructor will guide you
                at your pace, answer all the questions which you may have and
                help you on your way to step 3.
              </>
            }
          />
          <SuperBullet
            pos="2/4"
            number="03"
            heading="Get to know our gym"
            body={
              <>
                After your induction you have free full access to the Gym,
                Classes, and our Personal Training services for seven days,
                5.30AM to 9.00PM. This will give you time to experience
                everything our community has to offer. If you still have
                questions then one of our team is always at hand. When you are
                ready, have a look at our membership plans.
              </>
            }
          />
          <ImageGallery
            pic1={data.side2.childImageSharp.gatsbyImageData}
            pic2={data.dumbells.childImageSharp.gatsbyImageData}
            pic3={data.lowdown.childImageSharp.gatsbyImageData}
          />
          <TextSection
            pos="2/-1"
            subtitle="The next step in your fitness journey"
            body={
              <>
                We are positive that once you have experienced everything our
                gym has to offer that you will be keen to become part of our
                almost 500 strong fitness community. Enjoy our extensive
                selection of fitness classes and well equiped gym for the low
                monthly cost of <strong>??32.99</strong>. Or pay annually and{" "}
                <strong>save ??95</strong> on monthly membership.
              </>
            }
          />

          {/* <Image
          pos="1/5"
          pic={data.asksimon.childImageSharp.fluid}
          alt="An advert for Ask Simon. It shows Simon holding his arm out in a champion pose and sporting a wide smile."
          blurb={
            "Ask Simon is our weekly Question and Answer show published on YouTube and Facebook every Friday"
          }
        />
        <TextSection
          pos="2/5"
          subtitle="You have questions? He has answers!"
          body={
            <>
              Have you ever wondered what the difference between a Dumbell
              Press and a watch-a-macallit is? You pondedered on how many
              SNickers you can eat while excercising at the gym and still lose
              weight? These exciting questions will be answered and more!
              <br />
              Simon will be answering any and all questions via a video on
              Facebook and YouTube and may be on this site too, who knows? to
              If you have a question for Simon then send it, along with your
              name and email by using the handy form below. You never know,
              Simon may just anser your question and read your name out live
              on air!
              <strong> Exciting.</strong>.
            </>
          }
        /> */}
        </DualSection>
      </Container>
    </>
  );
};

export default Pass;

export const query = graphql`
  {
    topdown: file(relativePath: { eq: "gym/gym-topdown-landscape.jpg" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
      }
    }
    lowdown: file(relativePath: { eq: "gym/simon-consulting-landscape.jpg" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
      }
    }
    dumbells: file(relativePath: { eq: "gym/simon-client-landscape.jpg" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
      }
    }
    side2: file(relativePath: { eq: "gym/simon-demonstrating-landscape.jpg" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
      }
    }
  }
`;
