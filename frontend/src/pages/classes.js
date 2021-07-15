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
        title="Fitness Classes in Ashby and Online | Fitness Republic Gym | First Week FREE"
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
            Fitness Classes <span>For Everyone</span>
          </>
        }
        subtitle={"Fun Filled Excercise Classes in Ashby and online"}
      />
      <Container>
        <DualSection>
          <Pullquote
            body="Fitness classes are an ideal way to add structure, fun and motivation to your fitness plan. All our excercise classes are held in our immaculate, covid safe studio."
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
                fully air conditioned, bright, and airy. We also offer some
                outdoor fitness classes via our Bootcamp class.
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
                    a traditional ballet class with a cardio fitness element.
                    Strength, flexibility & posture work. Open to all levels &
                    abilities. No ballet shoes needed!
                    <strong>
                      <i>Open to all levels and abilities.</i>
                    </strong>
                  </li>
                  <hr />
                  <li>
                    <strong>Bootcamp: Outdoor Fitness Classes in Ashby</strong>{" "}
                    Bootcamps are fun, full body outdoor fitness classes held at
                    the local bathgrounds in Ashby De La Zouch. The content will
                    vary between circuits, Shoulder Excercises, HIIT, ab’s &
                    glutes. <hr />
                    <i>
                      Dependant on the weather but a drop of rain doesn’t stop
                      us!
                    </i>
                  </li>
                  <hr />
                  <li>
                    <strong>Boxfit</strong> A high energy workout that features
                    boxing pad work drills. Fat burning and fitness driven! Your
                    own gloves are required for this class and can be purchased
                    from any good sports retailer or directly from our gym in
                    Ashby.
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
                  <li>
                    <strong>HIIT Workout</strong> A High Intensity bodyweight
                    workout, involving repeated bouts of high intensity,
                    followed by various recovery times. A tough Fat Burning
                    Workout!
                  </li>
                  <hr />
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
                    <strong>Spin: Indoor Cycling</strong> A high intensity
                    workout focusing on endurance, strength with intervals of
                    high intensity followed by short bouts of recovery. A fun
                    and highly motivating class that can promote weight loss and
                    increase stamina.
                  </li>
                  <hr />
                  <li>
                    <strong>Yoga Classes</strong> Yoga practice began at the
                    dawn of civilization and has been used build strength,
                    flexibility and breathing to boost physical and mental
                    wellbeing. The main aspects of yoga are postures (a series
                    of movements designed to increase strength and flexibility)
                    and breathing. This class is suitable for all levels & will
                    leave you with a sense of calm & well being.
                  </li>
                  <hr />
                  <li>
                    <strong>Zero to Spin: Indoor Cycling for Begginers</strong>{" "}
                    Have you never sat on a spin bike before? Or maybe not for a
                    long time? Then we have 7 weeks to get you turned into a
                    serious spinner in this indoor cycling class for begginers.
                  </li>
                  <hr />
                  <li>
                    <strong>Zumba Classes</strong>
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
                    <strong>Zumba Toning</strong> Combines targeted body
                    sculpting exercises and high-energy cardio work with a
                    Latin-infused ZUMBA® moves to create a calorie torching,
                    strength training dance fitness party.
                  </li>
                </ul>
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
                We are live streaming some of our excercise classes from out
                Ashby Fitness Studio giving you access to join in from home. We
                use the <a href="https://zoom.us/">Zoom</a> platform for
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
  {
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
