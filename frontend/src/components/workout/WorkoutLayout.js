import React from "react";

const WorkoutLayout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Typography />
      {children}
    </>
  );
};

export default WorkoutLayout;
