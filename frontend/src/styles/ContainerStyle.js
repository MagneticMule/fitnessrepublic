import styled from "styled-components";
import { device } from "./DeviceSizes";

const Container = styled.main`
  margin: 0 auto;
  padding: 1em 4em 1em 5em;
  max-width: 1400px;

  @media ${device.mobileS} {
    padding: 1em 1em;
  }

  @media ${device.laptop} {
    /* max-width: 980px; */
    padding: 1em 4em 1em 6em;
  }

  @media ${device.laptopL} {
    /* max-width: 1200px; */
  }

  @media ${device.desktop} {
    /* max-width: 1600px; */
  }
`;

export default Container;
