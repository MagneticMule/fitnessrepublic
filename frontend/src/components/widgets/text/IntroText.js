import React from 'react'
import styled from 'styled-components'

const Text = styled.div`
  font-size: 2rem;
  letter-spacing: -1px;
  color: var(--orange);
  font-style: italic;
  margin: 0;
  line-height: 1.5;
  grid-column: ${props => (props.pos ? props.pos : '2/4')};
`;

const IntroText = (props) => (
<Text>
  {props.text}
</Text>
);

export default IntroText;
