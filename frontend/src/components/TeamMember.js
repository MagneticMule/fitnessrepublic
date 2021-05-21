import React from "react";
import styled from "styled-components";

const Card = styled.div`
  grid-column: ${props => (props.pos ? props.pos : "1/3")};
`;

const ImageContainer = styled.div`
  box-shadow: inset 0px 4px 2px rgba(0, 0, 0, 0.25);
  border-radius: 0.2em;
  overflow: hidden;
`;

const StyledImg = styled(Img)`
  z-index: -1;
  border-radius: 0.2em;
`;

const Name = styled.h3`
font-weight: 500;
font-size: 2rem;
`;


const Bio = styled.div`
  color: var(--dark-grey);
  font-style: italic;

  > h4 {
    font-size: 1rem;
    font-weight: 900;
  }

  >p {
    font-weight:500;
  }
  > strong {
    font-weight: bold;
  }
`;

const Contact = styled.div``;

const TeamMember = props => {
  return (
    <>
      <Card>
        <StyledImg fluid={props.pic} alt={props.alt} />
        <Name>{props.name}</Name>
        <Bio>{props.bio}</Bio>
        <Contact>Social Medias Goes Here</Contact>
      </Card>
    </>
  );
};

export default TeamMember;
