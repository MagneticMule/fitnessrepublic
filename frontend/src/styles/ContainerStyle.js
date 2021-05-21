import styled from 'styled-components';
import {device} from './DeviceSizes';

const Container = styled.div`
  margin: 0 auto;
  padding: 2em 4em;
  max-width: 1400px;

  @media ${device.mobileS} {
    padding: 2em 1.5em;
  }

  @media ${device.laptop} {
    /* max-width: 980px; */
    padding: 2em 4em;
  }

  @media ${device.laptopL} {
    /* max-width: 1200px; */
  }

  @media ${device.desktop} {
    /* max-width: 1600px; */
  }
`;


export default Container;