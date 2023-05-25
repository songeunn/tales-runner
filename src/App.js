import ReactGA from "react-ga";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Root from "./routes/Root/root";
import NoticePage from "./routes/NoticePage";
import ToolsPage from "./routes/ToolsPage";

const gaTrackingId = process.env.REACT_APP_GA_TRACKING_ID; // 환경 변수에 저장된 추적ID 가져오기
ReactGA.initialize(gaTrackingId); // react-ga 초기화 및 debug 사용 { debug: true }
ReactGA.pageview(window.location.pathname); // 추적하려는 page 설정

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={Root} />
        <Route path="/notice" element={NoticePage} />
        <Route path="/tools" element={ToolsPage} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
