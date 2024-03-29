import { graphql } from "gatsby";
import { Link } from "gatsby";
import React from "react";
import Helmet from "react-helmet";
import Header from "../components/Header.js";
import MembershipSection from "../components/MembershipSection.js";
import ReviewSection from "../components/ReviewSection.js";
import TextSection from "../components/TextSection.js";
import Image from "../components/widgets/Image.js";
import IntroText from "../components/widgets/text/IntroText.js";
import Container from "../styles/ContainerStyle";
import { DualSection } from "../styles/GridStyles";
import ImageGallery from "../components/ImageGallery";
import FormSevenDayPass from "../components/FormSevenDayPass";

const Membership = ({ data }) => {
  return (
    <>
      <Helmet
        title="Gym Membership Plans in Ashby | No Joining Fee| Fitness Republic Gym"
        meta={[
          {
            name: "description",
            content:
              "Try us first with our Free Seven Day Pass. Monthly, annual and family memberships available",
          },
          {
            name: "keywords",
            content:
              "free membership, free pass, gym membership, student membership, older people, class memberhip, family, youth training, yearly, annual",
          },
        ]}
      >
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "review": [
              {
              "@type": "Review",
              "reviewBody": "It's such a friendly & welcoming atmosphere, I've honestly never been to a gym like it. I always used to feel uncomfortable in the gym, being a larger lady, but at FR there really is a range of people of all shapes & sizes from al walks of life; this helps me to feel comfortable to workout properly.",
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
              },
              "author": {
                "@type": "Person",
                "name": "Zoe"
              }
            },
             {
              "@type": "Review",
              "reviewBody": "The best gym in Ashby, for sure! Friendly team, nice, clean and very safe when we talk about covid!": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
              },
              "author": {
                "@type": "Person",
                "name": "Sérgio Oliveira Souza"
              }
            }
            ]
      `}
        </script>
      </Helmet>
      <Header
        title={
          <>
            Ashby Fitness Gym <span>Membership Plans</span>
          </>
        }
        subtitle={"The very first step in your fitness journey"}
      />
      <Container>
        <DualSection>
          <TextSection
            pos={"2/5"}
            title="Seven Day Free Pass"
            subtitle="Experience everything we have to offer"
            body={
              <>
                We are confident that once you come to our gym you will feel
                right at home. We are so confident that we want you to try us
                out before you commit. You can try the Gym, Classes, and our
                Personal Training service all FREE for seven days. If you feel
                comfortable to train on your own please feel free to pop in at
                anytime, we will just ask you to fill in a simple medical
                questionnaire before you start training. Ready to go? To get
                started with your seven day pass just fill out the form below
                with your Name, Email and Phone Number so we can get back in
                contact with you as soon as possible.
              </>
            }
          />
          <FormSevenDayPass />

          <TextSection
            pos={"2/5"}
            title="Ready to get started?"
            subtitle="Keep going. We have your back"
            body="We have a mission to help as many people as possible achieve a healthy and strong body. Being fit and healthy has been proven to make all areas of life better, with a healthier body comes a healthier mind and a happier life. With over 10 years in business we have come to know what our customers want. We don't offer an endless selection of membership plans with add-ons you don't need and will never use. Rather, we focus on doing what we do well and our simple pricing structure supports our mission for inclusive fitness for all."
          />
          <TextSection
            pos="2/5"
            subtitle="Four Simple membership options"
            body={
              <>
                <ul>
                  <li>
                    <strong>Single Monthly</strong> Membership for one person
                  </li>
                  <li>
                    <strong>Joint Monthly</strong> Couples who train together,
                    stay together. Or so we hear. That's why we offer a unique
                    joint membership for two people.
                  </li>
                  <li>
                    <strong>Single Annual</strong> A massive saving for those
                    who know they are in the fitness journey for the long haul.
                    Pay a one off fee and have access to the gym for 12 months.
                  </li>
                  <li>
                    <strong>Student Monthly</strong> We want to encourage the
                    whole family to exercise and be part of Fitness Republic our
                    community. This is why we support training from the age of
                    14 with our Student Membership. <b>Terms Apply.</b>
                  </li>
                </ul>
              </>
            }
          />
          <IntroText
            text={
              <>
                Sound Good? <br />
                Let's get you signed up and started on your new fitness journey.
              </>
            }
          />

          <MembershipSection
            title="Membership for one adult"
            subtitle="Pay monthly or annualy"
            style="light"
            memberships={[
              {
                key: 1,
                style: "purple",
                title: (
                  <>
                    Single Adult <span>Monthly</span>
                  </>
                ),
                price: (
                  <>
                    <span>£32.99</span> Per Month
                  </>
                ),
                description:
                  "Full access to the Gym facilities and fitness classes for one person.",
                paymethod: "Payable once per month via Direct Debit",
              },
              {
                key: 2,
                style: "gold",
                title: (
                  <>
                    Single Adult <span>Annual</span>
                  </>
                ),
                price: (
                  <>
                    <span>£299.99</span> Per Year
                  </>
                ),
                save: <>Save £95</>,
                description:
                  "Full access to the Gym facilities and fitness classes for one person.",
                paymethod: "Payable in one installment at the gym or online",
              },
              {
                key: 3,
                style: "purple",
                title: (
                  <>
                    Joint Adult <span>Monthly</span>
                  </>
                ),
                price: (
                  <>
                    <span>£55.00</span> Per Month
                  </>
                ),
                description:
                  "Full access to the Gym facilities and fitness classes for two people.",
                paymethod: "Payable once per month via Direct Debit",
              },
              {
                key: 4,
                style: "purple",
                title: (
                  <>
                    Single Student <span>Monthly</span>
                  </>
                ),
                price: (
                  <>
                    <span>£25.99</span> Per Month
                  </>
                ),
                description:
                  "Full access to the Gym facilities and fitness classes for one student.",
                paymethod: "Payable once per month via Direct Debit",
              },
            ]}
          />
          <ReviewSection
            reviews={[
              {
                key: 1,
                location: "content",
                headshot: data.zoehead.childImageSharp.gatsbyImageData,
                text: (
                  <>
                    It's such a friendly & welcoming atmosphere, I've honestly
                    never been to a gym like it. I always used to feel
                    uncomfortable in the gym, being a larger lady,{" "}
                    <strong>
                      but at FR there really is a range of people of all shapes
                      & sizes from al walks of life;
                    </strong>{" "}
                    this helps me to feel comfortable to workout properly.
                  </>
                ),

                reviewer: "Zoe",
                origin: "Facebook",
              },
              {
                key: 2,
                location: "content",
                headshot: data.sergiohead.childImageSharp.gatsbyImageData,
                text: (
                  <>
                    The best gym in Ashby, for sure! Friendly team, nice, clean
                    and very safe when we talk about covid!
                  </>
                ),

                reviewer: "Sérgio Oliveira Souza",
                origin: "Facebook",
              },
            ]}
          />
          <TextSection
            pos="2/5"
            subtitle="Included in your membership"
            body={
              <>
                <ul>
                  <li>
                    <strong>Gym Access</strong> Full access to our state of the
                    art gym from 5.30AM - 9.00PM Weekdays
                  </li>
                  <li>
                    <strong>Access to all fitness classes</strong> We offer a
                    diverse mixture of classes for every fitness level. You can
                    attend at the gym, join us online and even catch up on the
                    ones you missed on our faceboook group.
                  </li>
                  <li>
                    <strong>Personalized training plan</strong> One of our team
                    will work with you to devise a personalized training plan
                    for you. As your fitness evolves we will revaluate your plan
                    to push you forward towards your fitness goals.
                  </li>
                </ul>
              </>
            }
          />
          <ImageGallery
            pic1={data.side2.childImageSharp.gatsbyImageData}
            pic2={data.dumbells.childImageSharp.gatsbyImageData}
            pic3={data.lowdown.childImageSharp.gatsbyImageData}
          />

          <TextSection
            pos="3/5"
            subtitle="Need further support on your fitness journey?"
            body={
              <>
                Once you have your membership sorted out then have a look at one
                of our <Link to="/training/"> personal training options</Link>.
                Or simple ask one of the team when you are at the gym.
              </>
            }
          />
          {/* <InfoBubble /> */}
        </DualSection>
      </Container>
    </>
  );
};

export default Membership;

export const query = graphql`
  {
    zoehead: file(relativePath: { eq: "headshots/zoe.jpg" }) {
      childImageSharp {
        gatsbyImageData(height: 120, width: 120, layout: FIXED)
      }
    }
    sergiohead: file(relativePath: { eq: "headshots/sergio.jpg" }) {
      childImageSharp {
        gatsbyImageData(height: 120, width: 120, layout: FIXED)
      }
    }
    file: file(relativePath: { eq: "simon-with-client.jpg" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
      }
    }
    topdown: file(relativePath: { eq: "gym/gym-topdown-landscape.jpg" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
      }
    }
    lowdown: file(relativePath: { eq: "man-running-treadmill.jpg" }) {
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
