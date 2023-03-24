import styled from "styled-components";
import MainPage from "./components/MainPage/MainPage";
import { COLORS } from "./styles/config";

function App() {
  return (
    <Container>
      <MobileContainer>
        <MainPage />
      </MobileContainer>
    </Container>
  );
}

const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: ${COLORS.BG};
`;

const MobileContainer = styled.div`
  max-width: 420px;
  width: 100%;
  padding: 20px;
  border: 1px solid ${COLORS.BORDER};
  background-color: ${COLORS.BG};
  overflow: scroll;
  -ms-overflow-style: none; /* IE */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera, Edge */
  }
`;
export default App;
