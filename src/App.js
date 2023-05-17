import ReactGA from "react-ga";

const gaTrackingId = process.env.REACT_APP_GA_TRACKING_ID; // 환경 변수에 저장된 추적ID 가져오기
ReactGA.initialize(gaTrackingId); // react-ga 초기화 및 debug 사용 { debug: true }
ReactGA.pageview(window.location.pathname); // 추적하려는 page 설정

function App() {
  return;
}

export default App;
