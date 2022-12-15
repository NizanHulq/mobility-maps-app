import React from "react";
import Iframe from "react-iframe";

const Education = () => {
  return (
    <Iframe
      url="/html-iframe/education.html"
      width="1200vw"
      height="1000vh"
      id=""
      className=""
      display="flex"
      position="absolute"
      styles={{ zIndex: "50", right: "0" }}
    />
  );
};

export default Education;
