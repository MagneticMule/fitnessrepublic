import React from 'react';
import { navigate } from 'gatsby-link';
import styled from "styled-components";
import { device } from "../styles/DeviceSizes";

const FormSection = styled.section`
  @media ${device.mobileS} {
    padding: 2em;
    margin: 0 -1.5em 4em -1.5em;
    border-radius: 0;
  }

  @media ${device.laptop} {
    padding: 4em;
    margin: 0 0 4em 0;
    border-radius: 8px;
  }
`;

const Form = (props)=> (
<FormSection>
 <h1>Contact</h1>
 <form name="contact" method="post" action="#" data-netlify="true" data-netlify-honeypot="bot-field">

 <input type="hidden" name="bot-field" />
 <input type="hidden" name="form-name" value="General Question" />

 <div className="field">
    <label htmlFor="name">Name</label>
    <input type="text" name="name" id="name" />
  </div>
  <div className="field half">
    <label htmlFor="email">Email</label>
    <input type="text" name="email" id="email" />
  </div>
  <div className="field">
    <label htmlFor="message">Message</label>
    <textarea name="message" id="message" rows="6" />
  </div>
  <ul className="actions">
    <li>
      <input type="submit" value="Send Message" className="special" />
    </li>
    <li>
      <input type="reset" value="Clear" />
    </li>
  </ul>
</form>
    </FormSection>
  )

  export default Form;