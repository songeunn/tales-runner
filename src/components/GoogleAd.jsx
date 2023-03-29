import React, { useEffect } from "react";

const GoogleAd = ({
  className = "adsbygoogle",
  client = "ca-pub-6332605771069407",
  slot = "2993830358",
  format = "fluid",
  responsive = "",
  layoutKey = "-h2+d+5c-9-3e",
}) => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      // console.log("Advertise is pushed");
    } catch (e) {
      if (process.env.NODE_ENV !== "production")
        console.error("AdvertiseError", e);
    }
  }, []);

  //production이 아닌 경우 대체 컴포넌트 표시
  if (process.env.NODE_ENV !== "production")
    return (
      <div
        style={{
          background: "#e9e9e9",
          color: "black",
          fontSize: "16px",
          fontWeight: "bold",
          textAlign: "center",
          padding: "16px",
        }}
      >
        광고 표시 영역
      </div>
    );

  //production인 경우 구글 광고 표시
  return (
    <ins
      className={className}
      style={{
        overflowX: "auto",
        overflowY: "hidden",
        display: "block",
        textAlign: "center",
      }}
      data-ad-client={client}
      data-ad-slot={slot}
      data-ad-format={format}
      data-full-width-responsive={responsive}
      data-ad-layout-key={layoutKey}
    />
  );
};

export default GoogleAd;
