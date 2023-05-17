import { ArrowUpOutlined } from "@ant-design/icons";
import React from "react";
import styled from "styled-components";

const BackToTopButton = () => {
  return (
    <Button>
      <ArrowUpOutlined />
    </Button>
  );
};

const Button = styled.button`
  position: sticky;
  left: 90%;
  bottom: 10px;
  width: 40px;
  height: 40px;
  margin-top: 10px;
  background-color: #eee;
  border-radius: 100%;
`;
export default BackToTopButton;
