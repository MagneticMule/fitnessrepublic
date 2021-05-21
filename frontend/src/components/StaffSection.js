import React from "react";
import styled from "styled-components";

import TeamMemmber from "./TeamMember";

const StaffContent = styled.section`
  grid-column: ${props => (props.pos ? props.pos : "1/5")};
  display: flex;
  flex-direction: column;
`;



const StaffSection = props => {

  return(
    <>
      props.members.map({$member=> {
        $member
      }});
    </>

  );
}


export default StaffContent;