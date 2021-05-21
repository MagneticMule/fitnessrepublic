import React from 'react';
import styled from 'styled-components';
// import 'normalize.css';

import GlobalStyles from '../../styles/GlobalStyles.js';
import Typography from '../../styles/Typography.js';


export default function WorkoutLayout( { children }){
  return(
    <>
      <GlobalStyles/>
      <Typography/>
      {children}
    </>
  );
}