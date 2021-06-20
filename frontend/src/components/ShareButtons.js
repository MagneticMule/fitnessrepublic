import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import {
  EmailShareButton,
  FacebookShareButton,
  HatenaShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton,
} from "react-share";

import {
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  HatenaIcon,
  InstapaperIcon,
  LineIcon,
  LinkedinIcon,
  LivejournalIcon,
  MailruIcon,
  OKIcon,
  PinterestIcon,
  PocketIcon,
  RedditIcon,
  TelegramIcon,
  TumblrIcon,
  TwitterIcon,
  ViberIcon,
  VKIcon,
  WeiboIcon,
  WhatsappIcon,
  WorkplaceIcon,
} from "react-share";

const Container = styled.section`
  text-align: center;
  grid-column: ${(props) => (props.pos ? props.pos : "1 / -1")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2em 0 4em 0;
  /* background: var(--grey); */
  margin-bottom: -1em;

  > h2 {
    font-size: 2rem;
    font-weight: 500;
    color: var(--deeper-purple);
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 1em;
`;

const ShareButtons = ({ tags, message, url }) => {
  const tags = ["ashby", "free", "classes", "gym", "ashbyfitness"];
  const message = `I just got my FREE SEVEN DAY PASS from Fitness Republic Gym in Ashby💪 @ashbyfitness \nWant to join me?\n`;
  const url = "https://www.fitnessrepublic.co.uk/membership";
  return (
    <Container>
      <h2>Share with a friend</h2>
      <Buttons>
        <EmailShareButton
          subject="I have a FREE 7 day pass from Fitness Republic, want to join me?"
          body={message}
        >
          <EmailIcon size={64} round={true} />
        </EmailShareButton>

        <TwitterShareButton url={url} title={message} hashtags={tags}>
          <TwitterIcon size={64} round={true} />
        </TwitterShareButton>

        <FacebookShareButton url={url} quote={message}>
          <FacebookIcon size={64} round={true} />
        </FacebookShareButton>

        <WhatsappShareButton url={url} quote={message}>
          <WhatsappIcon size={64} round={true} />
        </WhatsappShareButton>
      </Buttons>
      <p>
        We would ❤ it if you could share our FREE PASS offer with your friends
        and family.
      </p>
      <p></p>
    </Container>
  );
};

// Icon.propTypes = {
//   iconName: PropTypes.oneOf([
//     'Phone',
//     'Information',
//     'Question',
//     'Facebook',
//     'Youtube',
//     'Instagram',
//     'Whatsapp',
//   ]),
//   style: PropTypes.oneOf([
//     'plain', 'circle'
//   ])
// }

export default ShareButtons;
