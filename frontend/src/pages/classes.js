import { Link } from "gatsby";
import React from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import { DualSection } from "../styles/GridStyles";
import Header from "../components/Header";
import Container from "../styles/ContainerStyle";
import TextSection from "../components/TextSection";
import Image from "../components/widgets/Image";
import Pullquote from "../components/widgets/text/Pullquote";
import Calender from "../components/ClubrightCalender";

import { FaApple, FaWindows } from "react-icons/fa";
import { DiAndroid } from "react-icons/di";

const Classes = ({ data }) => {
  return (
    <>
      <Helmet
        title="Fitness Classes in Ashby De La Zouch | First Week Free | Fitness Republic Gym"
        meta={[
          {
            name: "description",
            content:
              "We offer classes in our Fitness Studio in Ashby and online via video.  Yoga Classes, HIIT, Core, Ballet Be Fit, Pilates, Zumba, Zumba Toning and more.",
          },
          {
            name: "keywords",
            content:
              "fitness classes near me, Spin indoor cycling, fitness classes in ashby, covid safe, yoga, Zumba, dancing, zumba toning, high intensity, weight lifting, spin class, cycling, fitness bike, instructor, cardio, step class, weight lifting, HIIT, ballet, boxing, boxfit, fitness timetable",
          },
        ]}
      >
        <script
          src="https://fitnessrepublic.clubright.co.uk/js/calendar.js"
          type="text/javascript"
          crossorigin="anonymous"
        ></script>
      </Helmet>
      <Header
        title={
          <>
            Fitness Classes in<span> Ashby De La Zouch</span>
          </>
        }
        subtitle={"Fun Filled Excercise Classes in Ashby and online"}
      />
      <Container>
        <DualSection>
          <Pullquote
            body="Fitness classes are an ideal way to add structure, fun and motivation to your fitness plan. All our excercise classes are held in our immaculate, covid safe studio in Ashby De La Zouch."
            attribution={
              <>
                <strong>Simon Pellecchia</strong> // Director and Personal
                Trainer
              </>
            }
          />

          <TextSection
            title={
              <>
                Let's <strong>Get Fit in 2021</strong>
              </>
            }
            subtitle={
              <>
                Excercise classes From <strong>AB's</strong> to{" "}
                <strong>Zumba</strong>
              </>
            }
            body={
              <>
                One of the great things about group excercise classes is that
                they provide a community that help keeps you motivated to reach
                your fitness goals. Our class schedule includes an incredible
                range of workout training activities to suit any fitness level.
                We have an extensive range of group exercise classes on offer
                including high-octane HIIT fitness classes, Conditioning and
                energising cardiovascular and sculpting classes to relaxing mind
                and body, we have a class to suit you. Our intimate studio is
                fully air conditioned, bright, airy and{" "}
                <Link to="/covid/">Covid Safe</Link>. During summer we also offer outdoor
                fitness classes at the{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Bath_Grounds"
                  target="_blank"
                  rel="nofollow noopener"
                  aria-label="Takes you to the Bath Grounds article on WikiPedia.org"
                >
                  Bath Grounds Ashby
                </a>
                .
              </>
            }
          />
          <Image
            pic={data.timetable.childImageSharp.gatsbyImageData}
            alt="Fitness Republic Gym Ashby. Fitness Class Timetable"
            blurb={
              <>
                This weeks timetable. Download it, print it and stick it on the
                front of your fridge
              </>
            }
          />
          <TextSection
            title="Our Fitness Classes"
            subtitle="As diverse as they are effective"
            body={
              <>
                <ul>
                  {data.classes.edges.map((c) => (
                    <li>
                      <strong>{c.node.name}</strong>
                      {c.node.description}
                    </li>
                  ))
                  }
                </ul>
                <hr />
              </>
            }
          />

          <Image
            pic={data.fitnessclass1.childImageSharp.gatsbyImageData}
            alt="A black and white image of one of our fitness classes in Ashby. A group of women hold barbells with small weights over their shoulder in unison."
            blurb={"One of our fitness classes taking place in our studio."}
          />

          <TextSection
            title="Booking an Excercise Class"
            subtitle={
              <>
                Coming to our <strong>Fitness Classes in Ashby</strong>
              </>
            }
            body={
              <>
                You can book your class right here using the Calender below or
                through our members app up to{" "}
                <strong>seven days in advance</strong>.
              </>
            }
          />
          <TextSection
            subtitle={
              <>
                Joining in with our <strong>Online Fitness Classes</strong>
              </>
            }
            body={
              <>
                We are live streaming some of our excercise classes from our
                Ashby Fitness Studio giving you access to join in from home. We
                use the <a href="https://zoom.us/">Zoom</a> platform for this.
                <ul>
                  <strong>Zoom is available on:</strong>
                  <li>
                    <FaApple /> iPhone/iPad{" "}
                    <a
                      href="https://apps.apple.com/gb/app/zoom-cloud-meetings/id546505307"
                      target="_blank"
                      rel="nofollow noopener"
                      aria-label="Takes you to the Zoom app on the Apple App Store; opens in a new window"
                    >
                      [download from the App Store]
                    </a>
                  </li>
                  <li>
                    <DiAndroid /> Android{" "}
                    <a
                      href="https://play.google.com/store/apps/details?id=us.zoom.videomeetings&hl=en_GB&gl=US"
                      target="_blank"
                      rel="nofollow noopener"
                      aria-label="Takes you to the Zoom app on the Google Play Store; opens in a new window"
                    >
                      [download from the Google Play Store]
                    </a>
                  </li>
                  <li>
                    <FaWindows /> Windows{" "}
                    <a
                      href="https://zoom.us/download"
                      target="_blank"
                      rel="nofollow noopener"
                      aria-label="Opens the download page on the Zoom website; opens in a new window"
                    >
                      [download from the Zoom website]
                    </a>
                  </li>
                  <li>
                    <FaApple /> Apple Mac{" "}
                    <a
                      href="https://zoom.us/download"
                      target="_blank"
                      rel="nofollow noopener"
                      aria-label="Opens the download page on the Zoom website; opens in a new window"
                    >
                      [download from the Zoom website]
                    </a>
                  </li>
                </ul>
                To join one of our online workout classes, simply click the Zoom
                options when booking, click and join the class from the comfort
                of your own home (or anywhere else for that matter).
              </>
            }
          />
          <Image
            pic={data.fitnessclass2.childImageSharp.gatsbyImageData}
            alt="A black and white image of one of our fitness classes. A lady and a man punching during a BoxFit class."
            blurb={"A boxfit class taking place in our upstairs studio."}
          />
          <Calender />
        </DualSection>
      </Container>
    </>
  );
};

export default Classes;

export const query = graphql`
query q {
  classes:allSanityFitnessClass(
    sort: {
      fields: [name]
      order: [ASC]
    }) {
    edges {
      node {
        id
        isActive
        name
        description
      }
    }
  }
    timetable: file(
      relativePath: {
        eq: "fitness-classes-ashby-timetable-fitness-republic-ashby.jpg"
      }
    ) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
      }
    }
    fitnessclass1: file(
      relativePath: {
        eq: "ladies-excercise-class-ashby-de-la-zouch-fitness-republic-ashby.jpg"
      }
    ) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
      }
    }
    fitnessclass2: file(
      relativePath: {
        eq: "boxfit-excercise-class-ashby-de-la-zouch-fitness-republic-ashby.jpg"
      }
    ) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED, layout: FULL_WIDTH)
      }
    }
  }
`;
