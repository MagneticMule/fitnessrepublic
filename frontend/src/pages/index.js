import { Link } from "gatsby";
import React from "react";
import Helmet from "react-helmet";

import Layout from "../components/Layout";
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

import intro from "/static/intro.mp4";

import FormSevenDayPass from "../components/FormSevenDayPass";

const Index = ({ data }) => {
  return (
    <Layout>
      <Helmet
        title="Fitness Republic - Family Gym in Ashby"
        meta={[
          {
            name: "description",
            content:
              "The premiere family gym at the heart of Ashby de la Zouch. We offer an extensive range of group fitness classes, personal coaching and a well equiped gym all within an clean and covid safe friendly environment."
          },
          {
            name: "keywords",
            content:
              "gym, fitness, personal training, ashby, ashby de la zouch, leicestershire, free pass, student membership, local, near me"
          }
        ]}
      >
        <script type="application/ldon">
          {`
                  {
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    "url": "https://www.fitnessrepublic.co.uk",
                    "name": "Fitness Republic",
                    "contactPoint": {
                      "@type": "ContactPoint",
                      "telephone": "01530 413330",
                      "contactType": "Enquiries"
                    }
                  }
                `}
        </script>
      </Helmet>

      <Header
        title={
          <>
            We are <span>Fitness Republic</span>
          </>
        }
        subtitle={
          "A Family run gym with a focus on inclusive fitness and wellbeing"
        }
      />
      <Container>
        <DualSection>
          <Pullquote
            body="Fitness Republic is a family business and as soon as you walk into the gym you’ll feel at home."
            attribution={
              <>
                <strong>Simon Pellecchia</strong> // Director and Personal
                Trainer
              </>
            }
          />

          <TextSection
            title="Welcome Aboard"
            subtitle="Our mission - fitness, Strength and Balance for Life"
            body="We are a friendly and caring team, passionate about your fitness, health and wellbeing. We will give you a warm welcome and support you every step of the way to reach your fitness goals and achieve them at a pace which is comfortable for you. We will work alongside you to create the  right exercise and nutrition programmes for you so that you can relax in the knowledge that you are on track to a fitter, happier, healthier life."
          />

          <Image
            pic={data.simonsarah.childImageSharp.fluid}
            alt="Simon and Sarah, directors of Fitness Republic, standing in the gym, smiling at the camera"
            blurb={
              "Simon and Sarah Pellecchia started Fitness Republic in 2010"
            }
          />

          <TextSection
            pos="2/5"
            title="Your Fitness Republic Journey"
            subtitle="Get started training with us in 3 simple steps"
            body={
              <>
                At Fitness Republic, we promote health and wellbeing over body
                image. Experience tells us that if you are given the right
                guidance and are having fun while training, you will stick with
                your plan achieve a happier, healthier, fitter life. We will
                take the time to listen to you and give you the tools and
                equipment you need to
                <strong> exercise safely and confidently</strong>.
              </>
            }
          />

          {/* <IntroText text="want to try us out for free? Get access to all our facilities including our state of the art gym, fitness classes and a support from our expert staff for seven days at no cost and with no commitment." /> */}
          <SuperBullet
            id="getstarted"
            pos="2/4"
            number="01"
            heading="Make Contact"
            body={
              <>
                Contacting us is easy. All we need is your name and a method of
                contact, either your email or telephone number. We will get back
                to you within the day to make an appointment for your first
                visit. If you prefer to chat to a real life human being you can{" "}
                <strong>call us directly on 01530 413330</strong> or simply pop
                into the gym anytime between{" "}
                <strong>7.00 AM and 8.00 PM</strong> for an informal chat with
                one of the team.
              </>
            }
          />
          <FormSevenDayPass />
          <video
            className="intro-video"
            height="100%"
            width="100%"
            loop
            muted
            autoPlay
            source
            src={intro}
            type="video/mp4"
          />
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
          <ImageGallery
            pic1={data.side2.childImageSharp.fluid}
            pic2={data.dumbells.childImageSharp.fluid}
            pic3={data.lowdown.childImageSharp.fluid}
          />
          <SuperBullet
            pos="2/4"
            number="03"
            heading="Seven Day Free Pass"
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

          <MembershipSection
            title="Single Membership Plans"
            subtitle="Gym and Class"
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
                paymethod: "Payable once per month via Direct Debit"
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
                description:
                  "Full access to the Gym facilities and fitness classes for one person.",
                paymethod: "Payable in one installment at the gym or online"
              }
            ]}
          />

          <TextSection
            title="What are people saying about us?"
            subtitle="It's all good, very good"
            body={
              <>
                At Fitness Republic we are proud of the service we deliver to
                our members and are continually working to improve ourselves as fitness professionals to
                help give you the very best training and support possible. We currenty have{" "}
                <strong>
                  over 200 five star reviews on{" "}
                  <a
                    href="https://www.google.com/search?q=fitness+republic+reviews&oq=fitness+republic+reviews&aqs=chrome..69i57.4743j0j7&sourceid=chrome&ie=UTF-8#lrd=0x4879fc383cd0fdb3:0x4daa961f269ae01f,1,,,"
                    target="_blank"
                    aria-label="Takes you to our reviews on Google"
                  >
                    Google
                  </a>{" "}
                  and{" "}
                  <a
                    href="https://www.facebook.com/fitnessrepublicashby/reviews"
                    target="_blank"
                    aria-label="Takes you to our reviews on Facebook"
                  >
                    Facebook
                  </a>
                </strong>{' '}
                 and we couldn't be more delghted.
                <br/>
                <i>Feel free to have a look but promise you'll come back!</i> 😊
              </>
            }
          />
          <ReviewSection
            reviews={[
              {
                key: 1,
                location: "content",
                headshot: data.kathyhead.childImageSharp.fixed,
                text: (
                  <>
                    I started with Blanka in January 2021. Her approach to our
                    personal training sessions are both{" "}
                    <strong>creative</strong> and <strong>personable</strong>.
                    No two sessions are the same. I now look forward to exercise
                    and have achieved significant results. Long may this journey
                    with her continue.
                  </>
                ),

                reviewer: "Kathy",
                origin: "Instagram"
              },
              {
                key: 2,
                location: "content",
                headshot: data.chrishead.childImageSharp.fixed,
                text: (
                  <>
                    I love this place. The staff are amazing, they are all
                    friendly and helpfull. They take the time to answer any
                    questions you have. When the pandemic hit the whole team
                    created a Facebook page for live workouts which was
                    brilliant. I can't recommend this place highly enough.
                  </>
                ),

                reviewer: "Chris Osborn",
                origin: "Google"
              }
            ]}
          />
          <TextSection
            pos={"2/-1"}
            subtitle="Your Fitness Republic Journey Continues"
            body={
              <>
                We are always on hand to offer advice on how to use the
                eqiupment at the gym, which classes would suit you best and of
                course will design a fitness plan that's suitable for your
                fitness goals. This is all included in your membership.{" "}
                <Link
                  to="/membership"
                  aria-label="Takes you to our membership page"
                >
                  Have a look at our four membership plans and decide which one
                  suits you best.
                </Link>
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
    </Layout>
  );
};

export default Index;

export const query = graphql`
         query {
           kathyhead: file(relativePath: { eq: "headshots/katy.jpg" }) {
             childImageSharp {
               fixed(height: 120, width: 120) {
                 ...GatsbyImageSharpFixed
               }
             }
           }
           chrishead: file(relativePath: { eq: "headshots/chris.jpg" }) {
             childImageSharp {
               fixed(height: 120, width: 120) {
                 ...GatsbyImageSharpFixed
               }
             }
           }
           blankahead: file(relativePath: { eq: "headshots/blanka.jpg" }) {
             childImageSharp {
               fixed(height: 150, width: 150) {
                 ...GatsbyImageSharpFixed
               }
             }
           }

           simonsarah: file(relativePath: { eq: "simon-sarah-spin.jpg" }) {
             childImageSharp {
               fluid(maxWidth: 1000) {
                 base64
                 tracedSVG
                 aspectRatio
                 src
                 srcSet
                 srcWebp
                 srcSetWebp
                 sizes
                 originalImg
                 originalName
               }
             }
           }

           asksimon: file(relativePath: { eq: "ask-simon.jpg" }) {
             childImageSharp {
               fluid(maxWidth: 1000) {
                 base64
                 tracedSVG
                 aspectRatio
                 src
                 srcSet
                 srcWebp
                 srcSetWebp
                 sizes
                 originalImg
                 originalName
               }
             }
           }

           topdown: file(
             relativePath: { eq: "gym/gym-topdown-landscape.jpg" }
           ) {
             childImageSharp {
               fluid(maxWidth: 1000) {
                 base64
                 tracedSVG
                 aspectRatio
                 src
                 srcSet
                 srcWebp
                 srcSetWebp
                 sizes
                 originalImg
                 originalName
               }
             }
           }

           lowdown: file(
             relativePath: { eq: "gym/simon-consulting-landscape.jpg" }
           ) {
             childImageSharp {
               fluid(maxWidth: 1000) {
                 base64
                 tracedSVG
                 aspectRatio
                 src
                 srcSet
                 srcWebp
                 srcSetWebp
                 sizes
                 originalImg
                 originalName
               }
             }
           }

           dumbells: file(
             relativePath: { eq: "gym/simon-client-landscape.jpg" }
           ) {
             childImageSharp {
               fluid(maxWidth: 1000) {
                 base64
                 tracedSVG
                 aspectRatio
                 src
                 srcSet
                 srcWebp
                 srcSetWebp
                 sizes
                 originalImg
                 originalName
               }
             }
           }

           side2: file(
             relativePath: { eq: "gym/simon-demonstrating-landscape.jpg" }
           ) {
             childImageSharp {
               fluid(maxWidth: 1000) {
                 base64
                 tracedSVG
                 aspectRatio
                 src
                 srcSet
                 srcWebp
                 srcSetWebp
                 sizes
                 originalImg
                 originalName
               }
             }
           }
         }
       `;
