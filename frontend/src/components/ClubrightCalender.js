import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { device } from "../styles/DeviceSizes";
const Calender = styled.section`
  grid-column: 1/-1;
  #clubrightcalendar {
    p > small {
      display: none;
    }

    .calendarDay + .calendarDay {
      margin-left: 4px;
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
        min-height: 460px;
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
const ClubrightCalender = (props) => {
  // const [calData, setCalData] = useState(0);
  // useEffect(() => {
  //   // get data from clubright calender. It returnes Raw Html including jQuery
  //   fetch(
  //     `https://api.allorigins.win/get?url=${encodeURIComponent(
  //       "https://app.clubright.co.uk/Public/Calendar/?clubname=fitnessrepublic&classes="
  //     )}`,

  //     {
  //       Headers: {
  //         "Content-Type": "text/html; charset=UTF-8"
  //       }
  //     },
  //     {
  //       mode: "no-cors" // no-cors, *cors, same-origin
  //     }
  //   )
  //     .then(response => response.text())
  //     .then(clubrightData => {
  //       console.log(clubrightData);
  //       setCalData(clubrightData);
  //     });
  // }, []);
  return (
    <Calender>
      <div
        // dangerouslySetInnerHTML={{ __html: calData}}
        id="clubrightcalendar"
        data-clubname="fitnessrepublic"
        data-classes=""
      ></div>
    </Calender>
  );
};

export default ClubrightCalender;
