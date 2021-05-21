import { Link } from "gatsby";
import React from "react";
import Helmet from "react-helmet";

import Layout from "../components/Layout";
import { DualSection } from "../styles/GridStyles";
import Header from "../components/Header";
import Container from "../styles/ContainerStyle";
import TextSection from "../components/TextSection";
import Image from "../components/widgets/Image";
import Pullquote from "../components/widgets/text/Pullquote";
import Calender from "../components/ClubrightCalender";

import {
  FaApple,
  FaWindows,
} from "react-icons/fa";
import { DiAndroid } from "react-icons/di";

const Index = ({ data }) => {
  return (
    <Layout>
      <Helmet
        title="Fitness Republic - Fitness Classes delivered in the gym and onine"
        meta={[
          {
            name: "description",
            content:
              "We offer gym based and online classes in Zumba, HIIT, Core, Yoga, Ballet Be Fit, Cambat HIIT, Pilates, Stretch and Relax, Zumba Toning and more."
          },
          {
            name: "keywords",
            content:
              "gym, fitness, personal training, ashby, ashby de la zouch, leicestershire, free pass, student membership, local, near me"
          }
        ]}
      >
        <script src="https://fitnessrepublic.clubright.co.uk/js/calendar.js"></script>

        <script type="application/ldon">
          {`
            {
              @context": "https://schema.org",
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
            Fitness Classes <span>For Everyone</span>
          </>
        }
        subtitle={"Group fitness training delivered both in-gym and online"}
      />
      <Container>
        <DualSection>
          <Pullquote
            body="Fitness classes are an ideal way to add structure, fun and motivation to your fitness plan"
            attribution={
              <>
                <strong>Simon Pellechia</strong> // Director and Personal
                Trainer
              </>
            }
          />
          {/* <Button title="Book a visit" /> */}

          <TextSection
            title="Let's Get Started"
            subtitle="From AB's through Core to Zumba"
            body="One of the great things about group classes is that they provide a community that help keeps you motovated to reach your fitness goals. Our class schedule includes an incredible range of activities to suit any fitness level. We have an extensive range of group exercise classes on offer including high-octane HIIT, Conditioning and energising cardiovascular and sculpting classes to relaxing mind and body, we have a class to suit you. Our intimate studio is fully air conditioned, bright, and airy."
          />

          <Image
            pic={data.timetable.childImageSharp.fluid}
            alt="Our fitness class timetable."
            blurb={
              <>
                This weeks timetable. Download it, print it and
                stick it on the front of your fridge
              </>
            }
          />

          <TextSection
            title="Our Classes"
            subtitle="As diverse as they are effective"
            body={
              <>
                <ul>
                  <li>
                    <strong>Abs and Core</strong> This class is designed to
                    build the core muscle groups whilst improving posture
                    through performing a variety of exercises that strengthen
                    the abdonen and back. Plus increasing flexibility.
                  </li>
                  <hr />
                  <li>
                    <strong>Ballet Be Fit</strong> This is the perfect blend of
                    a traditional ballet class with a fitness element. Strength,
                    flexibility & posture work. Open to all levels & abilities.
                    No ballet shoes needed!
                    <strong>
                      <i>Open to all levels and abilities.</i>
                    </strong>
                  </li>
                  <hr />
                  <li>
                    <strong>Bootcamp</strong> Bootcamps are fun, full body
                    workouts, outdoor at the local Bath Grounds. The content
                    will vary between circuits, HIIT, ab’s & glutes.{" "}
                    <i>
                      Dependant on the weather but a drop of rain doesn’t stop
                      us!
                    </i>
                  </li>
                  <hr />
                  <li>
                    <strong>Boxfit</strong> A high energy workout that features
                    boxing pad work drills. Fat burning and fitness driven! Your
                    own gloves are required for this class.
                  </li>
                  <hr />
                  {/* <li>
                    <strong>Combat HIIT</strong> A High intensity workout
                    featuring punching, kicking and bodyweight drills to get the
                    heart pumping! A great fun, fat burning and fitness workout.{" "}
                  </li>
                  <hr /> */}
                  <li>
                    <strong>Cardio Step</strong> Bringing the classic 80’s step
                    class back to life. A great low impact, high cardio workout
                    and safe for your joints.
                  </li>
                  <hr />
                  <li>
                    <strong>Core</strong> A class focued on building the core
                    muscle groups while improving posture through performing a
                    variety of exercises that strengthen the abdomen and back ,
                    plus increase flexibility.
                  </li>
                  <hr />
                  {/* <li>
                    <strong>HIIT</strong> A High Intensity bodyweight workout,
                    involving repeated bouts of high intensity, followed by
                    various recovery times. A tough Fat Burning Workout!
                  </li>
                  <hr /> */}
                  <li>
                    <strong>Glute Camp</strong> A fun workout focusing on the
                    glutes and quads. <i>Shape and sculpt those bums!</i>
                  </li>
                  <hr />
                  <li>
                    <strong>Group X</strong> A gym based class in which you will
                    perform the workout of the day (WOD) utilising all of the
                    gym and workouts will be performed in rounds or time.
                  </li>
                  <hr />
                  <li>
                    <strong>Legs, Guns and Buns</strong> This class works
                    exclusively on the legs, glutes and arms. Using body-
                    weight, bars, bands and steps, it’s a real fun workout.
                  </li>
                  <hr />
                  <li>
                    <strong>LIFT</strong> An amazing new class featuring
                    dumbbells to provide a full body workout. Learn new
                    exercises and techniques and how to perform them correctly
                    and safely whilst pushing your muscles further.
                  </li>
                  <hr />
                  <li>
                    <strong>Pilates</strong> Pilates is a form of exercise which
                    concentrates on strengthening the body with an emphasis on
                    core strength. This helps to improve general fitness and
                    overall well-being. Similar to Yoga, Pilates concentrates on
                    posture, balance and flexibility. .
                  </li>
                  <hr />
                  <li>
                    <strong>Pump</strong> One of the best overall toning classes
                    there is. Featuring our Les Mills Smart barbells with plenty
                    of sweat and fat burning! A whole body workout to great
                    music.
                  </li>
                  <hr />
                  <li>
                    <strong>Spin</strong> An indoor cycling class focusing on
                    endurance, strength, intervals, high intensity and recovery.
                    A fun and motivating class.
                  </li>
                  <hr />
                  <li>
                    <strong>Yoga</strong> In this class the basic, unconditional
                    yoga postures are practised to align, strengthen & promote
                    flexibility in the body. Breathing techniques & meditation
                    are also integrated. This class is suitable for all levels &
                    will leave you with a sense of calm & well being.
                  </li>
                  <hr />
                  <li>
                    <strong>Zero to Spin</strong> Have you never sat on a spin
                    bike before? Or maybe not for a long time? Then we have 7
                    weeks to get you turned into a serious spinner in this
                    class.
                  </li>
                  <hr />
                  <li>
                    <strong>Zumba</strong>
                    Combines Latin and international music with dance moves.
                    ZUMBA® routines incorporate interval training alternating
                    fast and slow rhythms to help improve cardiovascular fitness
                  </li>
                  <hr />
                  <li>
                    <strong>Zumba Step</strong>
                    Combining the awesome toning and strengthening power of step
                    aerobics with the fun fitness party that only Zumba brings
                    to the dancefloor.
                  </li>
                  <hr />
                  <li>
                    <strong>Zumba Toning</strong> Combines targeted
                    body-sculpting exercises and high-energy cardio work with
                    Latin-infused ZUMBA® moves to create a calorie-torching,
                    strength- training dance fitness-party.
                  </li>
                </ul>
              </>
            }
          />
          <Image
            pic={data.fitnessclass1.childImageSharp.fluid}
            alt="A black and white image of one of our fitness classes. A group of women hold barbells with small weights over their shoulder."
            blurb={"One of our fitness classes taking place in our studio."}
          />

          <TextSection
            title="Booking a class"
            subtitle="both gym based and zoom based"
            body={
              <>
                To join in simply click the Zoom options when booking, click and
                join the class from the comfort of your own home (or anywhere
                else for that matter). You can book your class right here or
                through our members app up to{" "}
                <strong>seven days in advance</strong>.
              </>
            }
          />
          <TextSection
            subtitle="Joining in with our zoom classes"
            body={
              <>
                We are live streaming some of our classes giving you access to
                join in from home. We use the{" "}
                <a href="https://zoom.us/">Zoom</a> platform for this.
                <ul>
                  <strong>Zoom is available on:</strong>
                  <li>
                    <FaApple /> iPhone/iPad{" "}
                    <a
                      href="https://apps.apple.com/gb/app/zoom-cloud-meetings/id546505307"
                      target="_blank"
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
                      aria-label="Opens the download page on the Zoom website; opens in a new window"
                    >
                      [download from the Zoom website]
                    </a>
                  </li>
                </ul>
              </>
            }
          />
          <Calender />
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

    timetable: file(relativePath: { eq: "classtimetable.jpg" }) {
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

    fitnessclass1: file(relativePath: { eq: "fitness-class-1.jpg" }) {
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
