import React from "react";
import styled from "styled-components";
import { navigate } from "gatsby-link";
import { device } from "../styles/DeviceSizes";
const Form = styled.form`
  margin-bottom: 4em;
  grid-column: ${props => (props.pos ? props.pos : "2/4")};
  display: flex;
  flex-direction: column;

  > .field {
    margin-top: 2em;

  }

  @media ${device.mobileS} {
    grid-column: 1/-1;
  }

  @media ${device.laptop} {
    grid-column: ${props => (props.pos ? props.pos : "2/4")};
  }

  @media ${device.laptopL} {
  }

  @media ${device.desktop} {
  }
`;

const Label = styled.label`
  letter-spacing: -0.02rem;
  display: block;
  font-size: 1.3rem;
  font-weight: 300;
  color: var(--deep-purple);
  text-transform: capitalize;
`;

const Input = styled.input`
  padding: 1em;
  border: 2px solid var(--orange);
  border-radius: 4px;
  background: var(--grey);
  box-shadow: inset var(--shadow-low);
  width: 100%;
  &:focus {
    border: 2px solid var(--deep-purple);
    box-shadow: none;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1em;
  background: var(--grey);
  border: 2px solid var(--orange);
  box-shadow: inset var(--shadow-low);
  border-radius: 4px;
  resize: none;
  &:focus {
    border: 2px solid var(--deep-purple);
    box-shadow: none;
  }
`;

const Button = styled.input`
  border: 0;
  font-weight: 700;
  border-radius: 8px;
  background: var(--orange);
  cursor: pointer;
  color: var(--white);
  width: auto;
  padding: 1.2em 1.8em;
  box-shadow: var(--shadow-low);
`;

const FormGeneral = props => (
  <Form
    name={$props => (props.name ? props.name : "General Enquiry")}
    method="post"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    action="#"
    id={props.id}
  >
    <div className="field">
      <Input type="hidden" name="bot-field" />
      <Input
        type="hidden"
        name="form-name"
        value={$props => (props.name ? props.name : "General Enquiry")}
      />
      <Label htmlFor="name">What should we call you?</Label>
      <Input
        type="text"
        required
        minlength="2"
        maxlength="30"
        size="45"
        name="name"
        id="name"
        placeholder="Your Name"
      />
    </div>

    <div className="field">
      <Label htmlFor="email">Email</Label>
      <Input
        required
        minlength="2"
        maxlength="30"
        size="35"
        type="email"
        name="email"
        id="email"
        placeholder="you@somewhere.com"
      />
    </div>

    <div className="field">
      <Label htmlFor="phone">Telephone Number</Label>
      <Input
        required
        minlength="7"
        maxlength="10"
        size="12"
        type="tel"
        name="phone"
        id="phone"
        placeholder="01530 413330"
      />
    </div>
    <div className="field">
      <Label htmlFor="message">Lets us know how we can help.</Label>
      <TextArea
        name="message"
        id="message"
        rows="6"
        maxlength="300"
        placeholder="Feel free to ask us about anything..."
      ></TextArea>
    </div>
    <div className="field">
      <Button type="submit" value="Send" />
    </div>
  </Form>
);

export default FormGeneral;
