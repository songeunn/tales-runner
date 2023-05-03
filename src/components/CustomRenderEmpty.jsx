import { FrownOutlined } from "@ant-design/icons";
import React from "react";

/** 검색 시 빈값 표출 */
const CustomRenderEmpty = () => {
  return (
    <div className="render-empty">
      <FrownOutlined />
      <p>칭호를 찾을 수 없어요</p>
    </div>
  );
};

export default CustomRenderEmpty;
