import styled from "styled-components";
import { GlobalStyle } from "./styles/global";

import Header from "./components/Header";
import { MemoryCardGame } from "./components/MemoryCard";
import { MemoryCardGameContextProvider } from "./providers/MemoryCardGameContextProvider";

export default function App() {
  return (
    <>
      <GlobalStyle />

      <MemoryCardGameContextProvider>
        <Container>
          <Header />
          <MemoryCardGame />
        </Container>
      </MemoryCardGameContextProvider>
    </>
  );
}

const Container = styled.div`
  position: absolute;
  inset: 0;
  background-color: var(--THEME_COLOR_04);
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
`;
