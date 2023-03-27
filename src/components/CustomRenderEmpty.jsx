import { FrownOutlined } from "@ant-design/icons";
import React from "react";

const CustomRenderEmpty = () => {
  return (
    <div className="render-empty">
      <FrownOutlined />
      <p>칭호를 찾을 수 없어요</p>
    </div>
  );
};

export default CustomRenderEmpty;
