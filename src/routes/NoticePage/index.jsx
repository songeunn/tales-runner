import React from "react";
import Layout from "../../components/Layout";
import { Space } from "antd";
import Notice from "../../components/Notice";
import notices from "../../data/notices";
import styled from "styled-components";
import { COLORS } from "../../styles/config";

const NoticePage = () => {
  return (
    <Layout>
      <Title>공지</Title>
      <Space direction="vertical" size="middle" style={{ width: "100%" }}>
        {notices.map((notice, idx) =>
          Notice(notice.title, notice.content, idx)
        )}
      </Space>
    </Layout>
  );
};

const Title = styled.h2`
  color: ${COLORS.TEXT};
`;

export default NoticePage;
