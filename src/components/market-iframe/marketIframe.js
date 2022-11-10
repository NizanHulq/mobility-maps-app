import React from "react";
import Iframe from "react-iframe";

const MarketIframe = () => {
  return (
    <Iframe
      url="/market2.html"
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

export default MarketIframe;
