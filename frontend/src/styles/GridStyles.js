import styled from "styled-components";
import { device } from "./DeviceSizes";

const DualSection = styled.section`
  margin-top: 4em;
  display: grid;
  grid-gap: 2em 4em;
  grid-template-columns: repeat(4, 1fr);
  grid-template-areas:
    "sidebar content1 content2 content3"
    "image   image    image    image";

  @media ${device.mobileS} {
    margin-top: 2em;
  }

  @media ${device.laptop} {
    margin-top: 4em;
  }
`;

const SplitSection = styled.section`
  display: grid;
  grid-gap: 2em 4em;
  grid-template-columns: repeat(auto);
`;

export { DualSection, SplitSection };
