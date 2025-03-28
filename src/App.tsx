import styled from "styled-components";
import { GlobalStyle } from "./styles/global";
import { MemoryCardGame } from "./components/MemoryCard";
import { MemoryCardGameContextProvider } from "./providers/MemoryCardGameContextProvider";

export default function App() {
  return (
    <>
      <GlobalStyle />

      <MemoryCardGameContextProvider>
        <Container>
          <Title>Memory Card App</Title>

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
  gap: 4px;
  padding: 16px;
  & > * {
    flex: 1;
  }
`;

const Title = styled.h1`
  margin: 0;
  text-align: center;
  color: var(--THEME_COLOR_01);
  padding-block: 16px;
  flex-grow: 0;
`;
