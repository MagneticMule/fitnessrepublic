import React from "react";
import styled from "styled-components";

const Calender = styled.section`
  grid-column: 1/-1;
  #clubrightcalendar {
    p>small {
        display: none;
    }
    .calendarDay {
      > h3 {
        font-weight: 700;
      }
      border-radius: 8px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      .class {
        flex-grow: 1;
        min-height: 430px;
        display: flex;
        flex-direction: column;
        border: 0;
        border-bottom: 1px solid black;
        &:last-of-type {
          border-bottom: 0;
        }
      }

      h4 {
        min-height: 80px;
        font-weight: 500;
        text-transform: capitalize;
      }

      p.text-center {
        margin-top: auto;
      }

      a {
        margin-top: auto;
        background: var(--lin-grad-smooth-orange);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        display: inline-block;
        justify-content: space-between;
        font-weight: 700;
        font-size: 1rem;
        text-transform: uppercase;
        color: white;
        padding: 0.8em 2em;
        cursor: pointer;
        transition: all 0.2s;
        text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
        border: 1px solid var(--deep-purple);
        &:hover {
          color: white;
          box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.3);
        }
      }
    }
  }
`;
const ClubrightCalender = props => {

  return (
    <Calender>
      <div
        id="clubrightcalendar"
        data-clubname="fitnessrepublic"
        data-classes=""
      ></div>
    </Calender>
  );
}


export default ClubrightCalender;