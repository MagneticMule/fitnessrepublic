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

const Privacy = () => {
  return (
    <Layout>
      <Helmet
        title="Fitness Republic - Privacy and Cookie Policy"
        meta={[
          {
            name: "description",
            content:
              "This is our privacy policy. We need one because of GDPR. There are many like it but this is ours."
          },
          {
            name: "keywords",
            content: "privacy, cookies"
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
      <Container>
        <DualSection>
          <TextSection
            id="privacy-policy"
            title="Privacy Policy"
            body={
              <ul>
                <li>
                  <strong>Types of information we may collect from you</strong>
                  We may collect, store and use the following kinds of personal
                  information about individuals who visit and use our website.
                </li>
                <hr />
                <li>
                  <strong>Information you supply to us.</strong> You may supply
                  us with information about you by filling in forms on our
                  website. This includes information you provide when you submit
                  a contact/enquiry form, for example the Free Seven Day Pass
                  form or one of our enquiry forms on any of the other pages.
                  The information you give us may include your name, e-mail
                  address and phone number.
                </li>
                <hr />
                <li>
                  <strong>
                    Information our website automatically collects about you.
                  </strong>{" "}
                  With regard to each of your visits to our website we may
                  automatically collect information including the following:
                  <ol>
                    <li>
                      <b>technical information,</b> including a truncated and
                      anonymised version of your Internet protocol (IP) address,
                      browser type and version, operating system and platform;
                    </li>
                    <hr />
                    <li>
                      <b>information about your visit,</b> including what pages
                      you visit, how long you are on the site, how you got to
                      the site (including date and time); page response times,
                      length of visit, what you click on, documents downloaded
                      and download errors.
                    </li>
                  </ol>
                </li>
                <li>
                  <strong>Cookies</strong> Our website uses cookies to
                  distinguish you from other users of our website. This helps us
                  to provide you with a good experience when you browse our
                  website and also allows us to improve our site. For detailed
                  information on the cookies we use and the purposes for which
                  we use them see our Cookie Policy below.
                </li>
                <li>
                  <strong>How we may use the information we collect</strong> We
                  use the information in the following ways: Information you
                  supply to us. We will use this information:
                  <ol>
                    <li>
                      to provide you with information and/or services that you
                      request from us
                    </li>
                    <li>
                      respond to any enquiries you make through this websites
                    </li>
                    <li>provide you with advice on our products</li>
                    <li>provide you with a free seven day pass</li>
                  </ol>
                </li>
                <li>
                  <strong>
                    Information we automatically collect about you.
                  </strong>
                  We will use this information:
                  <ol>
                    <li>
                      to administer our site including troubleshooting and
                      statistical purposes;
                    </li>

                    <li>
                      to improve our site to ensure that content is presented in
                      the most effective manner for you and for your computer;
                    </li>
                    <li>
                      security and debugging as part of our efforts to keep our
                      site safe and secure.
                    </li>
                  </ol>
                  This information is collected anonymously and is not linked to
                  information that identifies you as an individual. We use
                  Google Analytics to track this information. Find out how
                  Google uses your data at
                  <a href="https://support.google.com/analytics/answer/6004245">
                    {" "}
                    this Google support page
                  </a>
                  .
                </li>
                <li>
                  <strong>Disclosure of your information</strong> Any
                  information you provide to us will either be emailed directly
                  to us or may be stored on a secure server located near Dublin
                  within the Republic of Ireland. We use a trusted third party
                  website and hosting provider (Netlify) to facilitate the
                  running and management of this website. Netlify meet high data
                  protection and security standards and are bound by contract to
                  keep any information they process on our behalf confidential.
                  Any data that may be collected through this website that
                  Netlify process, is kept secure and only processed in the
                  manner we instruct them to. Netlify cannot access, provide,
                  rectify or delete any data that they store on our behalf
                  without permission. We do not rent, sell or share personal
                  information about you with other people or non-affiliated
                  companies. We will use all reasonable efforts to ensure that
                  your personal data is not disclosed to regional/national
                  institutions and authorities, unless required by law or other
                  regulations. Unfortunately, the transmission of information
                  via the internet is not completely secure. Although we will do
                  our best to protect your personal data, we cannot guarantee
                  the security of your data transmitted to our site; any
                  transmission is at your own risk. Once we have received your
                  information, we will use strict procedures and security
                  features to try to prevent unauthorised access.
                </li>
                <li>
                  <strong>Third party links</strong> Our site may, from time to
                  time, contain links to and from the third party websites. If
                  you follow a link to any of these websites, please note that
                  these websites have their own privacy policies and that we do
                  not accept any responsibility or liability for these policies.
                  Please check these policies before you submit any personal
                  data to these websites.
                </li>
                <li>
                  <strong>Your rights – access to your personal data</strong>{" "}
                  You have the right to ensure that your personal data is being
                  processed lawfully (“Subject Access Right”). Your subject
                  access right can be exercised in accordance with data
                  protection laws and regulations. Any subject access request
                  must be made in writing to [insert school/Trust Data
                  Controller contact details]. We will provide your personal
                  data to you within the statutory time frames. To enable us to
                  trace any of your personal data that we may be holding, we may
                  need to request further information from you. If you have a
                  complaint about how we have used your information, you have
                  the right to complain to the Information Commissioner’s Office
                  (ICO).
                </li>
                <li>
                  <strong>Changes to our privacy policy</strong> Any changes we
                  may make to our privacy policy in the future will be posted on
                  this page and, where appropriate, notified to you by e-mail.
                  Please check back frequently to see any updates or changes to
                  our privacy policy.
                </li>
                <li>
                  <strong>Contact</strong> Questions, comments and requests
                  regarding this privacy policy are welcomed and should be
                  addressed to info@fitnessreublic.co.uk.
                </li>
              </ul>
            }
          />
          <TextSection
            id="cookie-policy"
            title="Cookie Policy"
            subtitle=""
            body={
              <>
                <ul>
                  <li>
                    <strong>What are cookies?</strong> Cookies are a small text
                    files that are stored in your web browser that allows{" "}
                    <span>Fitness Republic </span> or a third party to recognize
                    you. Cookies can be used to collect, store and share bits of
                    information about your activities across websites, including
                    on <span>Fitness Republic </span> website.
                    <p>Cookies might be used for the following purposes:</p>
                    <ol>
                      <li>To enable certain functions</li>
                      <li>To provide analytics</li>
                      <li>To store your preferences</li>
                      <li>To enable ad delivery and behavioral advertising</li>
                    </ol>
                    <p>
                      <span>Fitness Republic </span> uses both session cookies
                      and persistent cookies.
                    </p>
                    <p>
                      A session cookie is used to identify a particular visit to
                      our Website. These cookies expire after a short time, or
                      when you close your web browser after using our Website.
                      We use these cookies to identify you during a single
                      browsing session, such as when you log into our Website.
                    </p>
                    <p>
                      A persistent cookie will remain on your devices for a set
                      period of time specified in the cookie. We use these
                      cookies where we need to identify you over a longer period
                      of time. For example, we would use a persistent cookie if
                      you asked that we keep you signed in.
                    </p>
                  </li>
                  <hr />
                  <li>
                    <strong>
                      How do third parties use cookies on the{" "}
                      <span class="website_name">Fitness Republic </span>{" "}
                      Website?
                    </strong>
                    Third party companies like analytics companies and ad
                    networks generally use cookies to collect user information
                    on an anonymous basis. They may use that information to
                    build a profile of your activities on the{" "}
                    <span class="website_name">Fitness Republic </span> Website
                    and other websites that you've visited.
                  </li>
                  <hr />
                  <li>
                    <strong>What are your cookies options?</strong> If you don't
                    like the idea of cookies or certain types of cookies, you
                    can change your browser's settings to delete cookies that
                    have already been set and to not accept new cookies. To
                    learn more about how to do this, visit the help pages of
                    your browser.
                    <hr />
                    <i>
                      Please note, however, that if you delete cookies or do not
                      accept them, you might not be able to use all of the
                      features we offer, you may not be able to store your
                      preferences, and some of our pages might not display
                      properly.
                    </i>
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

export default Privacy;


