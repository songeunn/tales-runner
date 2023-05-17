import { ConfigProvider } from "antd";
import React from "react";
import CustomRenderEmpty from "../CustomRenderEmpty";
import styled from "styled-components";
import { COLORS } from "../../styles/config";
import BackToTopButton from "../BackToTopButton";
import NavigationBar from "../NavigationBar";

const Layout = ({ children }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "Pretendard",
        },
      }}
      renderEmpty={CustomRenderEmpty}
    >
      <Container>
        <Wrap>
          <MobileContainer>
            {children}
            {/* <BackToTopButton /> */}
          </MobileContainer>
          <NavigationBar />
        </Wrap>
      </Container>
    </ConfigProvider>
  );
};

const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  height: -webkit-fill-available;
  height: fill-available;

  display: flex;
  justify-content: center;
  background-color: ${COLORS.BG};
`;

const Wrap = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 60px;
`;

const MobileContainer = styled.div`
  max-width: 420px;
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  border: 1px solid ${COLORS.BORDER};
  /* border-left: 1px solid ${COLORS.BORDER}; */
  /* border-right: 1px solid ${COLORS.BORDER}; */
  background-color: ${COLORS.BG};
  overflow: scroll;
  -ms-overflow-style: none; /* IE */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera, Edge */
  }
`;

export default Layout;
