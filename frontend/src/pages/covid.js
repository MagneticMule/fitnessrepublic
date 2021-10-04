import { Link } from "gatsby";
import React from "react";
import Helmet from "react-helmet";
import { DualSection } from "../styles/GridStyles";
import Container from "../styles/ContainerStyle";
import TextSection from "../components/TextSection";
import Video from "../components/Video";

const Covid = () => {
  return (
    <>
      <Helmet
        title="Covid Safety Policy | Fitness Republic | Ashby Gym and Fitness"
        meta={[
          // {
          //   name: "robots",
          //   content: "noindex",
          // },
          {
            name: "description",
            content:
              "Our gym covid safety policy outlines how we are ensuring we keep you as safe as possible during your time at Fitness Republic Gym in Ashby De La Zouch.",
          },
          {
            name: "keywords",
            content: "covid, gym, safety, ashby de la zouch",
          },
        ]}
      ></Helmet>
      <Container>
        <DualSection>
          <TextSection
            id="covid-safety-policy"
            title={<h1>Covid Safety Policy</h1>}
            body={
              <ul>
                These are difficult times for us all. At{" "}
                <Link to="/">Fitness Republic</Link> we undertsand that you may
                be unsure about whether it is safe to come to our Gym in Ashby
                De La Zouch. At a bare minimum you should know that:
                <ol>
                  <li>
                    <h4>Our staff are tested twice per week for Covid.</h4>
                  </li>
                  <li>
                    <h4>
                      We allow no more than 20 people into the gym at once
                    </h4>
                  </li>
                  <li>
                    <h4>
                      We enforce social distancing at each of our <Link to="/classes">Fitness Classes</Link>
                    </h4>
                  </li>
                  <li>
                    <h4>
                      All members are required to clean equipment after use
                    </h4>
                  </li>
                </ol>
                If you would like to know more, please keep reading. In this
                document we answer some of the questions you have sent us as
                well as outline what we are doing to make Fitness Republic a
                safe and healthy environment for keeping fit in 2021 and beyond.
                <li>
                  <strong>Is it safe to go to the Gym in 2021?</strong>
                  Your risk of catching Covid in any environment will depend on
                  a range of factors, such as how well ventilated the space is,
                  how many people are in that space with you, how good everyone
                  is at sticking to gym cleaning and social distancing rules,
                  how long you spend at the gym, and how many Covid cases there
                  are in Ashby De La Zouch as a whole.
                </li>
                <li>
                  <strong>
                    Is it safe to go to the gym after covid vaccine?
                  </strong>
                  Whether you have been vaccinated also plays a central role, If
                  you’re fully vaccinated then your chances of catching Covid –
                  and falling very ill – are thankfully, very low. Here at{" "}
                  <Link to="/">Fitness Republic</Link> we have strict rules in
                  place with regards to cleaning equipment and social
                  distancing.
                  <br />
                  We made a quick video explaining what we are doing to protect
                  you and our staff during your visit to{" "}
                  <Link to="/">Fitness Repulic</Link> for the first time.
                </li>
                <hr />
                <li>
                  <Video
                    videoSrcURL="https://www.youtube.com/embed/ozCYQ0K1NBE"
                    videoTitle="Fitness Republic Covid Safety Proceedures"
                  />
                </li>
                <hr />
                <li>
                  <strong>What If I feel unwell?</strong>
                  First and most importantly, if you feel unwell or have any
                  symptoms such as a high temperature, or a new cough, please
                  don’t enter the facility at all. If you have been with someone
                  who has any of these symptoms please self-isolate for 2 weeks.
                  Remember, it’s a tough time for gyms, and we desperately want
                  to stay open and get you back fit and exercising, but we can
                  easily be shut down again if there are outbreaks.
                </li>
                <li>
                  <strong>
                    Gym etiquette is all about how you behave in the gym
                    environment.
                  </strong>{" "}
                  <ol>
                    <li>
                      At the top of our list is <strong>RESPECT</strong> With so
                      many people entering the facility to try to improve
                      themselves, remember that we’re all in this together! So,
                      with the social distancing aspect please use common sense,
                      and respect others. Give way, when passing if needed,
                      maybe move a little further away if you sense that others
                      are a little more worried. Please don’t frown upon anyone
                      who feels this way as you never know their circumstances,
                      perhaps they have family members that are shielding.
                    </li>
                    <li>
                      When entering the facility please think about{" "}
                      <strong>PERSONAL HYGIENE</strong>, particularly washing
                      your hands, this is paramount. At my facility, you will be
                      required to anti-bac your hands upon immediate entry,
                      followed by the complete washing of your hands with soap
                      moments later. A wash facility will be provided in the
                      actual gym area, to help make this really easy for you to
                      do at regular intervals.
                    </li>
                    <li>
                      <strong>REPLACE YOUR EQUIPMENT</strong>—As COVID-19 can be
                      transferred by touching, please think about others. Once
                      you’ve used your piece of equipment, please clean, then
                      replace it, this will stop other members, and the team,
                      from having to touch equipment more than necessary. Seems
                      simple but is an extremely important point. If you use it,
                      put it back!
                    </li>
                    <li>
                      <strong>THINK ABOUT OUR TEAM</strong>—These times are new
                      to us all, and we’re all trying to find our way and do the
                      best we can. Our team are there to help and whilst we may
                      not always get it right, we are all trying our very best
                      to provide you with the safest environment for you to
                      train in. We want to give you the confidence to come back
                      to us!{" "}
                    </li>
                  </ol>{" "}
                </li>
                <hr />
                <li>
                  <strong>How do I get back my fitness after lockdown?</strong>
                  Coronavirus and lockdown have made people more aware of their
                  health and fitness and appears to have got the UK exercising
                  more. That in itself, is great news. There is a lot of talk
                  about how staying healthy and keeping your weight under
                  control are massive factors in helping to beat this virus, so
                  the quicker we can get back to help you with this the better
                  in my opinion. According to the Ta6 National Fitness Survey
                  published in May 2020, 56% of people want to go back to using
                  gyms after lockdown and a massive 35% of people that had not
                  previously got a gym membership would consider joining one
                  post lockdown. Below I’ve listed a few more points from an
                  exercise point of view, about how to get yourself back into
                  your own gym programme. With regard to each of your visits to
                  our website we may automatically collect information including
                  the following:
                  <ol>
                    <li>
                      <strong>Be patient</strong>—Don't expect to be at the same
                      level as you were before. During lockdown you may have let
                      your fitness slip, which means you would have lost some of
                      your abilities. However, you will be able to regain all of
                      your strength back – but just be patient. Work with the
                      strength you have now and stay consistent so that you can
                      quickly return to normal. Pushing yourself will only lead
                      to injuries which can set you back, so take your time.
                    </li>

                    <li>
                      <strong>Be kind to yourself</strong>—Whether you’ve
                      trained at home or not, you’re likely to have regressed on
                      some exercises, so start lighter than normal and slowly
                      increase over time and don’t beat yourself up about it.
                    </li>
                    <li>
                      <strong>Will I have lost all my hard work?</strong> - Any
                      loss in strength or muscle will return in 4-6 weeks of a
                      regular training routine, so take your time and don’t
                      worry.{" "}
                    </li>
                    <li>
                      <strong>How do I start again?</strong> - Set yourself some
                      new goals and start from scratch! This will help to
                      prepare you better than comparing to what you used to do.{" "}
                    </li>
                    <li>
                      <strong>How can we help?</strong> - Ask us! Obviously new
                      measures will be in place for social distancing within the
                      gym, but we will still be happy to help with new
                      programmes or if you need that extra push then why not
                      invest in you and book some personal training sessions to
                      get you back on track!
                    </li>
                    <li>
                      <strong>Stay positive</strong> - Stay positive and have
                      fun. Getting and keeping fit should be something you
                      enjoy.
                    </li>
                  </ol>
                </li>
              </ul>
            }
          />
        </DualSection>
      </Container>
    </>
  );
};

export default Covid;
