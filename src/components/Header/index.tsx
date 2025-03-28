import styled from "styled-components";
import Scoreboard from "../MemoryCard/Scoreboard";

export default function Header() {
  return (
    <Container>
      <FlexColumn />
      <Title>Memory Card App</Title>
      <FlexColumn>
        <Scoreboard />
      </FlexColumn>
    </Container>
  );
}

const Container = styled.header`
  flex-grow: 0;
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

const FlexColumn = styled.div`
  display: flex;
  flex: 1;
  justify-content: end;
`;

const Title = styled.h1`
  margin: 0;
  text-align: center;
  color: var(--THEME_COLOR_01);
  padding-block: 16px;
`;
