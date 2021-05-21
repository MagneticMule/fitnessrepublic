import { graphql, Link } from "gatsby";
import React from "react";
import Helmet from "react-helmet";

import Layout from "../components/Layout";
import Container from "../styles/ContainerStyle";
import { DualSection } from "../styles/GridStyles";
import Header from "../components/Header";
import TextSection from "../components/TextSection";
import Image from "../components/widgets/Image";
import ReviewSection from "../components/ReviewSection";
import InfoBubble from "../components/InfoBubble";

import ImageGallery from "../components/ImageGallery";

const TeamPage = ({ data }) => {
  return (
    <Layout>
      <Helmet
        title="Fitness Republic - All about us"
        meta={[
          {
            name: "description",
            content:
              "At Fitness Republic, we are passionate about helping everyone reach their goals. Our team are a dedicated bunch of fitness and wellbeing professionals, here to guide and support you on your unique fitness journey."
          },
          {
            name: "keywords",
            content:
              "leicester, inclusive, personal training, ashby, ashby de la zouch, market street, leicestershire, free pass, trial, weight loss, excercise, support, supportive, community, professional, weight, near me, lose weight,get fit"
          }
        ]}
      ></Helmet>
      <Header
        title={
          <>
            Our story. our team. <span>Your Gym</span>
          </>
        }
        subtitle={"how we got here, Who we are and why we do what we do"}
      />
      <Container>
        <DualSection>
          <TextSection
            title="How we started"
            subtitle="a mission to create a new kind of gym"
            body="We opened Fitness Republic in May 2010. Why? Well, we wanted to open a facility that  fostered the most comfortable, fun, friendly and social environment to train physically and relax mentally. We wanted a gym that felt more like a community than a place to simply 'work out' where you came in, lifted some weights then walked away.

              Creating a facility that encompassed all of our passions about keeping fit & healthy was always going to be a tough nut to crack. With so many facilities out there, we wanted to be different. We wanted to bring you the most comfortable, family friendly facility that wasn’t only just about training, but about lifestyle, wellbeing, friends and the social side of working out.

              At Fitness Republic, we are passionate about helping everyone reach their goals. Our team are a dedicated bunch of fitness and wellbeing professionals, here to guide and support you on your unique fitness journey."
          />
          <TextSection
            title="All work, all play"
            subtitle="From heavy lifters to ballroom dancers, our team is as diverse as it is passionate."
            body="Our expert team have a wealth of fitness, nutrition and wellbeing knowledge. we care and support everyone who walks through our door. We’re passionate about helping people meet their fitness and health goals. Our team of experts are both highly experienced and highly passionate about the support we give you throughout your fitness journey.
            "
          />
          <Image
            pic={data.team.childImageSharp.fluid}
            alt="Black and white group shot of our team in the gym"
            blurb={
              <>
                <strong>Clockwise from top left:</strong> Sarah, Marcus, Ben,
                Jacqui, Blanka, Connor and Simon
              </>
            }
          />
          <TextSection
            pos="3/5"
            body={
              <>
                No matter what level you are starting from. An absolute beginner
                who’s never entered a gym before, or someone who has not
                attended the gym for a long while, all the way to a very
                experienced, and a dedicated gym user - we can help. We can
                design you a plan for your specific needs. Losing weight,
                getting fitter, muscle building or just to keep moving, we have
                the equipment and the know-how. All of our programs are
                included, and our ongoing support is something we are very proud
                of. We have taken love and care to provide an environment that
                will make it so much more fun to exercise, with lots and lots of
                natural light, a small outside area for outdoor training and a
                small intimate class studio for our ever-expanding class
                timetable. Very clean and with Covid safe procedures firmly in
                place, we can’t wait to meet you!{" "}
              </>
            }
          />
          <ImageGallery
            pic1={data.simontreadmill.childImageSharp.fluid}
            pic2={data.jacquibench.childImageSharp.fluid}
            pic3={data.marcusdumbells.childImageSharp.fluid}
          />
          {/* <ReviewSection /> */}
          {/* <InfoBubble /> */}
          <TextSection
            pos="2/5"
            title="Frequently asked questions"
            subtitle="Gym safety, your membership and everything in between"
            body={
              <>
                <ul>
                  <li>
                    <strong>
                      What is an Induction, and do I have to have one?
                    </strong>
                    An induction is an introduction to the gym, compulsory for
                    those under the age of 18yrs. Above this age it is highly
                    recommended but not compulsory. This can be booked at our
                    reception or via email{" "}
                    <a href="info@fitnessrepublic.co.uk">
                      info@fitnessrepublic.co.uk
                    </a>{" "}
                    or by giving us a call{" "}
                    <a href="tel:+4401530413330"> 01530 413330</a>. During the
                    induction, we will show you around the facilities, explain
                    how the equipment works, and answer any questions you may
                    have.
                  </li>
                  <li>
                    <strong>What’s the minimum age for joining?</strong> You
                    must be at least 14 years old to join. For those under the
                    age of 18 we require written concent from your guardian.
                  </li>
                  <li>
                    <strong>What is the minimum membership length</strong> All
                    of our monthly direct debit memberships have a minimum
                    commitment term of 12 weeks (3 Months). As the way to great
                    results is consistency, we feel that 12 weeks will be a
                    perfect amount of time for you to get into the habit and
                    start to achieve them. It gives you some accountability,
                    which is another great part of achieving success.
                  </li>
                  <li>
                    <strong>How do I cancel my membership?</strong> We're sorry
                    to hear that you want to leave -{" "}
                    <b>
                      but did you know you can freeze or transfer your
                      membership instead?
                    </b>{" "}
                    Free freeze - you can currently freeze for free for up to
                    three months. The freeze will apply from your next payment
                    date. If you need to freeze for longer, please see a member
                    of the fitness team. If you would like to cancel please
                    email us at{" "}
                    <a href="info@fitnessrepublic.co.uk">
                      info@fitnessrepublic.co.uk
                    </a>{" "}
                    . Please do not cancel any direct debits in place as you may
                    incur costs from your bank. We will respond to your email
                    within 2 working days. Please note that cancellation is not
                    permitted within your contract minimum period and all
                    cancellations after this require 30 days notice.
                  </li>
                  <li>
                    <strong>Are there COVID-19 procedures in place?</strong>
                    Yes, we have a comprehensive procedure in place. Please
                    watch our COVID-19 safe video here.
                    https://youtu.be/ozCYQ0K1NBE You must watch this video
                    before attending the club.
                  </li>
                  <li>
                    <strong>Can I bring my Mobile Phone to the gym?</strong> Of
                    course! however, we ask that you don't use it while you are
                    on any of the machines. We would also ask that you seek
                    persmission of anyone in the photo’s / videos that you take
                    in the gym before sharing them online.
                  </li>
                  <li>
                    <strong>
                      Can I have a personal fitness program designed for me?
                    </strong>{" "}
                    Certainly. We offer program design as part of our service.
                    It is FREE to all members. We advise you to book in for a
                    change every 6-8 weeks.
                  </li>
                  <li>
                    <strong>Are the changing rooms open for use?</strong> Yes,
                    the changing facilities are open, however now, due to
                    COVID-19 restrictions we encourage you to attend ready for
                    exercise
                  </li>
                  <li>
                    <strong>Do you have lockers I can use?</strong>Yes, we have
                    lockers situated in the main gym and in the female changing
                    area. There is no charge and all they require a 4-digit code
                    of your choice. Ask a member of staff if you need
                    assistance.
                  </li>
                  <li>
                    <strong>Is there a signing in procedure?</strong> Yes, you
                    must sign in as you arrive at reception and sign out when
                    you leave. This helps us to keep everyone updated on the app
                    with how busy we are and also for our COVID -19 track and
                    trace process.
                  </li>
                  <li>
                    <strong>Where can I park?</strong> From our opening at
                    5.30AM until 9AM you can park outside the club on Market
                    Street, with no fees or penalties. From 9.00AM to 5.30PM you
                    are limited to 1 hour. There are many car parks within a
                    short walk to the gym at a small cost.{" "}
                    <b>We have a car park plan available at reception.</b>
                  </li>
                  <li>
                    <strong>What time do you open? </strong>We open at 5.30AM –
                    9PM from Monday to Friday, Saturday 8AM-6PM and Sunday
                    8AM-4PM.
                  </li>
                  <li>
                    <strong>How can I book fitness classes?</strong> You can
                    book your classes in 4 ways. Via our app, on this website,
                    at reception or by calling us on{" "}
                    <a href="tel:+4401530413330"> 01530 413330</a>.
                  </li>
                  <li>
                    <strong>What if I have never used the gym before?</strong>
                    No problem, our welcome and program appointments are the
                    perfect way to get familiar with the gym and the equipment
                    and to get advice from one of our expert team. Many of our
                    members are first time gym users, so you won’t be on your
                    own.
                  </li>
                  <li>
                    <strong>What is Physio Republic?</strong> Within Fitness
                    Republic we have our very own Physiotherapist, Craig. With
                    over 20 years experience Craig has helped many of our
                    members. Appointments can be booked either at reception or
                    by visiting the{" "}
                    <a
                      href="http://physiorepublic.co.uk/"
                      aria-label="Visit the Physio Republic website"
                    >
                      Physio Republic Website
                    </a>
                    .
                  </li>
                </ul>
              </>
            }
          />
        </DualSection>
      </Container>
    </Layout>
  );
};

export default TeamPage;

export const query = graphql`
         query {
           kathyhead: file(relativePath: { eq: "headshots/katy.jpg" }) {
             childImageSharp {
               fixed(height: 100, width: 100) {
                 ...GatsbyImageSharpFixed
               }
             }
           }
           blankahead: file(relativePath: { eq: "headshots/blanka.jpg" }) {
             childImageSharp {
               fixed(height: 152, width: 152) {
                 ...GatsbyImageSharpFixed
               }
             }
           }

           team: file(relativePath: { eq: "team-group-bw.jpg" }) {
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

           simontreadmill: file(
             relativePath: { eq: "staff/simon-treadmill.jpg" }
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
           jacquibench: file(
             relativePath: { eq: "staff/jacqui-bench.jpg" }
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
           marcusdumbells: file(
             relativePath: { eq: "staff/marcus-dumbells.jpg" }
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
