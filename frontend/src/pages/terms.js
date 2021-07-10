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

const Terms = () => {
  return (
    <>
      <Helmet
        title="Fitness Republic | Terms and Conditions"
        meta={[
          // {
          //   name: "robots",
          //   content: "noindex",
          // },
          {
            name: "description",
            content:
              "These are our terms and conditions for our membership plans. Have a read, any problems then let us know.",
          },
          {
            name: "keywords",
            content:
              "terms, conditions, membership, fees, rules, club,facilities",
          },
        ]}
      ></Helmet>
      <Container>
        <DualSection>
          <TextSection
            id="terms"
            title="Terms and Conditions"
            body={
              <ul>
                <li>
                  <strong>Membership</strong>
                  <ol>
                    <li>
                      Your membership will begin on the day you join unless
                      otherwise stated.
                    </li>
                    <li>
                      When paying by Direct Debit (DD) an initial payment called
                      Pro Rata will be required to cover the period up until
                      your first DD payment
                    </li>
                    <li>
                      Your membership is personal to you. You cannot transfer it
                      to another person without our authorisation.{" "}
                    </li>
                    <li>
                      If Fitness Republic (Ashby) Ltd or the bank/building
                      society makes a mistake with your DD payment, you are
                      guaranteed a full refund from the Bank/building society.
                    </li>
                    <li>
                      All DD memberships are subject to a three month commitment
                      period. There are extreme circumstances where this
                      contract can be broken but you must inform us immediately
                      and dissolving the contract will be at our discretion and
                      subject to a 30 day period.
                    </li>
                  </ol>
                </li>
                <hr />
                <li>
                  <strong>Fee's.</strong>
                  <ol>
                    <li>
                      You must pay a monthly membership fee, which will be
                      determined by your chosen membership package.{" "}
                    </li>
                    <li>
                      Monthly instalments will be dues on either 1st, 8th, 15th
                      or 25th of each calendar month or the next available
                      working day by DD.
                    </li>
                    <li>
                      We may change the amount of your monthly payments. If we
                      do, we will contact you on the email address supplied 14
                      days before the changes take place.
                    </li>
                    <li>
                      Monthly fees are payable regardless of attendance on your
                      behalf.{" "}
                    </li>
                  </ol>
                </li>
                <hr />
                <li>
                  <strong>Cancelling your membership</strong>
                  <ol>
                    <li>
                      Memberships cannot be cancelled prior to the agreed
                      contract length that you have committed to and the last
                      payment has been made.
                    </li>
                    <li>
                      A contract may be cancelled once the final payment has
                      been made: This requires 30 days notice by email to{" "}
                      <a
                        href="mailto:info@fitnessrepublic.co.uk"
                        aria-label="Email us your cancellation request"
                        target="_blank"
                        rel="noopener"
                      >
                        Info@FitnessRepublic.co.uk
                      </a>{" "}
                      and you <i>must</i> receive a confirmation return email
                      (within 2 working days) before cancelling any Direct Debit
                      in place.
                    </li>
                  </ol>
                </li>
                <li>
                  <strong>Club Rules</strong>
                  <ol>
                    <li>
                      You must comply with the club rules/etiquette which form
                      part of this agreement.
                    </li>
                    <li>
                      We may change the rules/etiquette at any time. We will
                      post notice of any changes within the club.
                    </li>
                  </ol>
                </li>
                <li>
                  <strong>Changing the Agreement.</strong>
                  <ol>
                    <li>
                      We can change the agreement at any time. We will give you
                      14 days notice of this change by contacting you on the
                      email address supplied.
                    </li>
                  </ol>
                </li>
                <li>
                  <strong>Facilities</strong>
                  <ol>
                    <li>
                      You are entitled to use the facilities available for your
                      membership package
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

export default Terms;
