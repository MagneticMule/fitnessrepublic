import React from 'react';
import styled from 'styled-components';
import { IconContext } from 'react-icons/lib';

import 'normalize.css';
import GlobalStyles from '../styles/GlobalStyles.js';
import Typography from '../styles/Typography.js';
import Menu from './Menu';
import MiniNav from './MiniNav';
import Footer from './Footer.js';

import WhatsAppWidget from 'react-whatsapp-widget';
import 'react-whatsapp-widget/dist/index.css';

import "@fontsource/lato/300.css";
import "@fontsource/lato/400.css";
import "@fontsource/lato/700.css";
import "@fontsource/lato/900.css";

import "@fontsource/nunito/200.css";
import "@fontsource/nunito/300.css";
import "@fontsource/nunito/400.css";
import "@fontsource/nunito/700.css";
import "@fontsource/nunito/900.css";

// require("@fontsource/lato");
// require("@fontsource/nunito");

class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { children } = this.props;
    return (
      <>
        <IconContext.Provider
          value={{ style: { verticalAlign: "-2px" } }}
        >
          <GlobalStyles />
          <Typography />
          <MiniNav />
          <Menu />
          {children}
          <Footer />
          <WhatsAppWidget
            companyName="Fitness Republic Ashby"
            phoneNumber="+441530413330"
            textReplyTime="Typically replies within an hour or two"
            message="Hi there! Ready to increase your health and fitness in 2021? Let's chat about it"
          />
        </IconContext.Provider>
      </>
    );
  }
}

export default Layout;
