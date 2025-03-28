import styled from "styled-components";
import useMemoryCardGame from "../../hooks/use-memory-card-game";

export default function Scoreboard() {
  const { score } = useMemoryCardGame();

  return (
    <Container>
      <Title>Score</Title>
      <Table>
        <TableRow>
          <TableHeader>Current</TableHeader>
          <TableData>{score.current}</TableData>
        </TableRow>
        <TableRow>
          <TableHeader>Best</TableHeader>
          <TableData>{score.best}</TableData>
        </TableRow>
      </Table>
    </Container>
  );
}

const Container = styled.table`
  padding: 8px 24px;
  border-radius: 8px;
  background-color: var(--THEME_COLOR_01);
  color: var(--THEME_COLOR_04);
  box-shadow: var(--SHADOW_INSET_ELEVATION_MEDIUM);
`;

const Table = styled.table`
  font-size: 0.8rem;
`;

const Title = styled.h3`
  font-size: 1.2rem;
  text-align: center;
  width: 100%;
  text-transform: uppercase;
`;

const TableRow = styled.tr``;

const TableHeader = styled.th`
  text-align: end;
  font-weight: normal;
`;

const TableData = styled.td`
  text-align: end;
  font-weight: bold;
  font-size: 1rem;
`;
