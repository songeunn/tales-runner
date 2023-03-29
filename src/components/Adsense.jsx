import React from "react";
import AdSense from "react-adsense";

const Adsense = ({ client, slot }) => {
  return (
    <AdSense.Google
      client={client}
      slot={slot}
      style={{ display: "block" }}
      format="auto"
      responsive="true"
    />
  );
};

export default Adsense;
