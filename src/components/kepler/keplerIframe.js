import React from "react";
import Iframe from "react-iframe";

const WarmindoIframe = () => {
  return (
    <Iframe
      url="/warmindo.html"
      width="100%"
      height="100%"
      id=""
      className=""
      display="block"
      position="flex"
      styles={{ flex: "80%" }}
    />
  );
};

export default WarmindoIframe;
