import React from "react";
import styled from "styled-components";
import { navigate } from "gatsby-link";
import { device } from "../styles/DeviceSizes";

const Form = styled.form`
  margin-bottom: 4em;
  grid-column: 2/4;
  display: flex;
  flex-direction: column;

  > .field {
    margin-bottom: 2em;
    display:flex;
    flex-direction:column;
  }

  .buttonGroup {
    display: flex;
    flex-direction:row;
    border-radius: 4px;
  }

  .buttonLabelGroup  + .buttonLabelGroup  {
    margin-left:2em;
  }

  .buttonLabelGroup {
    align-content:space-between;

  }

  @media ${device.mobileS} {
    grid-column: 1/-1;
    padding: 1em;
  }
  @media ${device.mobileM} {
    grid-column: 1/-1;
    padding: 1em;
  }
  @media ${device.mobileL} {
    grid-column: 1/-1;
    padding: 4em 2em;
  }

  @media ${device.laptop} {
    grid-column: 2/4;
    padding: 0;
  }

  @media ${device.laptopL} {
  }

  @media ${device.desktop} {
  }
`;

const Label = styled.label`
  letter-spacing: -0.02rem;
  font-size: 1.3rem;
  font-weight: 300;
  color: var(--deep-purple);
  text-transform: capitalize;
`;

const Input = styled.input`
  width: 100%;
  display: block;
  padding: 1em;
  border: 2px solid var(--orange);
  border-radius: 4px;
  background: #f4f4f4;
  border: 2px solid #ff7121;
  box-shadow: inset var(--shadow-low);
  ::placeholder {
    opacity: 0.7;
  }

  &:focus {
    border: 2px solid var(--deep-purple);
    box-shadow: none;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1em;
  border: 2px solid var(--orange);
  border-radius: 4px;
  resize: none;
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

const RadioButton = styled.input.attrs({ type: 'radio' })`
    display: inline-block;
    cursor: pointer;
    margin-left:.5em;
    width: 1em;
    height: 1em;
  `;

const FormSevenDayPass = (props) => (
  <Form
    name="Seven Day Pass"
    method="post"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    action="/thanks"
  >
    <div className="field">
      <Input type="hidden" name="bot-field" />
      <Input type="hidden" name="form-name" value="Seven Day Pass" />
      <Label htmlFor="name">What should we call you?</Label>
      <Input
        required
        minlength="2"
        maxlength="30"
        size="45"
        type="text"
        name="name"
        id="name"
        placeholder="Your Name"
      />
    </div>

    <div className="field">
      <Label htmlFor="email">Email</Label>
      <Input
        required
        minlength="6"
        maxlength="30"
        size="45"
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
        maxlength="12"
        size="12"
        type="tel"
        name="phone"
        id="phone"
        placeholder="e,g, 01530 413330"
      />
    </div>
    <div className="field">
      <Label htmlFor="over16Set">Are you over 16?</Label>
      <fieldset id="over16Set" className="buttonGroup">
        <div id="over16Set" className="buttonLabelGroup">
          <Label htmlFor="over16">Yes</Label>
          <RadioButton
            value="Yes"
            type="checkbox"
            name="age"
            id="over16"
          />
        </div>
        <div className="buttonLabelGroup">
          <Label htmlFor="under16">No</Label>
          <RadioButton
            value="No"
            type="checkbox"
            name="age"
            id="under16"
          />
        </div>
      </fieldset>
    </div>
    <div className="field">
      <Label htmlFor="inductionGroup">Would you like an induction with one of our team?</Label>
      <fieldset id="inductionGroup" className="buttonGroup">
        <div className="buttonLabelGroup">
          <Label htmlFor="inductionYes">Yes</Label>
          <RadioButton
            value="Yes"
            type="checkbox"
            name="induction"
            id="inductionYes"
          />
        </div>
        <div className="buttonLabelGroup">
          <Label htmlFor="inductionNo">No</Label>
          <RadioButton
            value="No"
            type="checkbox"
            name="induction"
            id="inductionNo"
          />
        </div>
      </fieldset>
    </div>
    <div className="field">
      <Label htmlFor="message">Message (optional)</Label>
      <TextArea
        name="message"
        id="message"
        rows="6"
        placeholder="Start the conversation..."
      ></TextArea>
    </div>
    <div className="field">
      <Button type="submit" value="Send Me The Free Seven Day Pass" />
    </div>
  </Form>
);

export default FormSevenDayPass;
