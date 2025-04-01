import styled from "styled-components";
import { useEffect, useRef, useState } from "react";

import useMemoryCardGame from "../../hooks/use-memory-card-game";

export default function Scoreboard() {
  const ref = useRef<HTMLDivElement>(null);
  const { score } = useMemoryCardGame();

  const [lastCurrent, setLastCurrent] = useState(score.current);

  useEffect(() => {
    if (score.current === lastCurrent) return;

    ref.current!.style.setProperty(
      "--color",
      score.current > lastCurrent ? "var(--hit-color)" : "var(--miss-color)",
    );

    ref.current!.style.animation =
      "blink 2 500ms ease-in-out alternate backwards";

    setTimeout(() => {
      ref.current!.style.animation = "";
    }, 1000);

    setLastCurrent(score.current);
  }, [score, lastCurrent]);

  return (
    <Container ref={ref}>
      <Title>Score</Title>
      <Table>
        <TableBody>
          <TableRow>
            <TableHeader>Current</TableHeader>
            <TableData>{score.current}</TableData>
          </TableRow>
          <TableRow>
            <TableHeader>Best</TableHeader>
            <TableData>{score.best}</TableData>
          </TableRow>
        </TableBody>
      </Table>
    </Container>
  );
}

const Container = styled.div`
  --hit-color: #0fd90f;
  --miss-color: red;
  --color: var(--hit-color);
  padding: 8px 24px;
  border-radius: 8px;
  border: 1px solid var(--THEME_COLOR_04);
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

const TableBody = styled.tbody``;

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
