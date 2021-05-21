import React from 'react';
import styled from 'styled-components';
import { Link } from "gatsby";
import { device } from "../styles/DeviceSizes";

import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaAddressCard,
  FaPhoneSquareAlt,
  FaStar,
  FaMapMarkerAlt,
} from 'react-icons/fa';

import Container from '../styles/ContainerStyle';

import FRlogoStacked from '../assets/images/svg/fitness-republic-logo-stacked.svg';


const SiteFooter = styled.footer`
  background: var(--dark-grad);
  color: var(--white);
  box-shadow: inset 0 0 64px rgba(0, 0, 0, 0.35),
    inset 0 0 16px rgba(0, 0, 0, 0.45);

   a {
    color:var(--white);

    :hover {
      color: var(--orange);
    }
  }
`;

  const Grid = styled.div`
    margin: 2em 0;
    display: grid;
    align-items: flex-start;
    grid-template-columns: repeat(3, 1fr);
    justify-content: space-between;
    grid-gap: 4em;

    @media ${device.mobileS} {
      grid-template-columns: 1fr;
    }

    @media ${device.laptop} {
      grid-template-columns: repeat(3, 1fr);
    }

    @media ${device.laptopL} {
    }

    @media ${device.desktop} {
    }
  `;

const Logo = styled.section`
  @media ${device.mobileS} {
    grid-column: 1/-1;
  }

  @media ${device.laptop} {
    grid-column: 1/3;
  }

  @media ${device.laptopL} {
  }

  @media ${device.desktop} {
  }
`;

const SectionHeader = styled.div`
  > h4 {
    font-weight: 700;
    padding:0;
    margin:0;
  }

  > p {
    padding:0;
    color: var(--maroon);
    text-transform:uppercase;
    font-weight: 700;
    margin:0;
    font-size: .8rem;
    padding-top:.6em;
  }
`;

const Address = styled.ul`
  > li {
    &:last-of-type {
      margin-top: 1em;
      font-weight: 300;
    }
  }

`;

const SocialIcons = styled.ul`


`;

  const TelephoneNumber = styled.div``;

  const Map = styled.div``;



  const Copyright = styled.div`
    background: rgba(0, 0, 0, 0.3);

    ul {
      > li + li {
        margin-left: 2em;
      }
      > li {
        display: inline-block;

        > a {
          text-decoration: underline;
          text-decoration-thickness: 0.15em;
          text-underline-offset: 4px;
        }
      }
    }
  `;




const Footer = props => (
  <SiteFooter>
    <Container>
      <Grid>
        <Logo>
          <FRlogoStacked />
          <p>
            We are a friendly and caring team, passionate about your fitness,
            health and wellbeing. We will give you a warm welcome and support
            you every step of the way to reach your fitness goals and achieve
            them at a pace which is comfortable for you. We will work alongside
            you to create the right exercise and nutrition programmes for you so
            that you can relax in the knowledge that you are on track to a
            fitter, happier, healthier life.
          </p>
        </Logo>
        <section>
          <SectionHeader>
            <h4>See our glowing reviews</h4>
            <p>Over 200 customers gave us Five Stars</p>
            <ul>
              <li>
                Google <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </li>
              <li>
                Facebook <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </li>
            </ul>
            {/* Head over to{' '}
                <a
                  href="https://www.facebook.com/fitnessrepublicashby/reviews"
                  aria="Link to facebook reviews for Fitness Republic Ashby"
                  alt="Read our reviews at Facebook.com"
                >Facebook</a> or Google to see the reviews in full. */}
          </SectionHeader>
        </section>
        <section>
          <SectionHeader>
            <h4>Finding Us</h4>
            <p>We are right in the center of ashby de la zouch</p>
          </SectionHeader>
          <Address>
            <li>59a Market Street</li>
            <li>Ashby De La Zouch</li>
            <li>Leicestershire</li>
            <li>LE65 1AH</li>
            <li>
              <FaPhoneSquareAlt />
              <a href="tel:+4401530413330"> 01530 413330</a>
            </li>
            <li>
              <a href="https://g.page/fitnessrepublicashby?share">
                <FaMapMarkerAlt />
                {" Open in Google Maps >>"}
              </a>
            </li>
            {/*  <li>
              <a href="#">
                <FaAddressCard />
                {" Download vCard  >>"}
              </a>
            </li>
          */}
          </Address>
        </section>
        <section>
          <SectionHeader>
            <h4>Opening Times</h4>
            <p>Seven days a week</p>
          </SectionHeader>
          <table>
            <tbody>
              <tr>
                <th>Monday</th>
                <td>5.30am - 9.00pm</td>
              </tr>
              <tr>
                <th>Tuesday</th>
                <td>5.30am - 9.00pm</td>
              </tr>
              <tr>
                <th>Wednesday</th>
                <td>5.30am - 9.00pm</td>
              </tr>
              <tr>
                <th>Thursday</th>
                <td>5.30am - 9.00pm</td>
              </tr>
              <tr>
                <th>Friday</th>
                <td>5.30am - 9.00pm</td>
              </tr>
              <tr>
                <th>Saturday</th>
                <td>8.00am - 6.00pm</td>
              </tr>
              <tr>
                <th>Sunday</th>
                <td>8.00am - 4.00pm</td>
              </tr>
            </tbody>
          </table>
        </section>
        <section>
          <SectionHeader>
            <h4>Keep in Touch</h4>
            <p>We post every day on the usual social channels</p>
          </SectionHeader>
          <SocialIcons>
            <li>
              <a href="https://twitter.com/ashbyfitness" aria-label="Twitter">
                <FaTwitter /> Twitter
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/fitnessrepublicashby/?fref=ts"
                aria-label="Facebook"
              >
                <FaFacebook /> Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/fitnessrepublicgym/"
                aria-label="Instagram"
              >
                <FaInstagram /> Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCcFx40fq_DCUcwatqgNgBAA"
                aria-label="YouTube"
              >
                <FaYoutube /> YouTube
              </a>
            </li>
          </SocialIcons>
        </section>
      </Grid>
    </Container>
    <Copyright>
      <Container>
        <strong>
          All content &copy; Fitness Republic 2021. All rights reserved.
        </strong>
        <p>
          The material on this site may not be reproduced, distributed,
          transmitted, cached or otherwise used, except with the prior written
          permission of Fitness Republic.
        </p>
        <ul>
          <li>
            <Link to="/privacy">Terms and Conditions</Link>
          </li>
          <li>
            <Link to="/privacy#privacy-policy">Privacy Policy</Link>
          </li>
          <li>
            <Link to="/privacy#cookie-policy">Cookie Policy</Link>
          </li>
        </ul>
      </Container>
    </Copyright>
  </SiteFooter>
);

export default Footer;
