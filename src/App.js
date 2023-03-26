import styled from "styled-components";
import Root from "./routes/Root/root";
import { COLORS } from "./styles/config";
import { ConfigProvider } from "antd";
import ReactGA from "react-ga";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const gaTrackingId = process.env.REACT_APP_GA_TRACKING_ID; // 환경 변수에 저장된 추적ID 가져오기
ReactGA.initialize(gaTrackingId); // react-ga 초기화 및 debug 사용 { debug: true }
ReactGA.pageview(window.location.pathname); // 추적하려는 page 설정

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
]);

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "Pretendard",
          fontSize: 15,
        },
      }}
    >
      <Container>
        <MobileContainer>
          <RouterProvider router={router} />
        </MobileContainer>
      </Container>
    </ConfigProvider>
  );
}

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

const MobileContainer = styled.div`
  max-width: 420px;
  width: 100%;
  padding: 20px;
  border-left: 1px solid ${COLORS.BORDER};
  border-right: 1px solid ${COLORS.BORDER};
  background-color: ${COLORS.BG};
  overflow: scroll;
  -ms-overflow-style: none; /* IE */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera, Edge */
  }
`;
export default App;
