import { CommentOutlined } from "@ant-design/icons";
import { FloatButton } from "antd";
import React from "react";

const FloatingButton = () => {
  return (
    <FloatButton.BackTop
      icon={<CommentOutlined />}
      style={{ right: 20, bottom: 20 }}
    />
  );
};

export default FloatingButton;
