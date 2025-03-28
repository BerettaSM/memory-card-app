import { useEffect, useState } from "react";
import styled from "styled-components";

import { MemoryCard } from ".";
import Card from "../../types/card";
import useMemoryCardGame from "../../hooks/use-memory-card-game";

const cards: Card[] = [
  {
    title: "ditto",
    description:
      "LLorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, et ipsam neque laudantium modi rem!",
    imageUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
  },
  {
    title: "bulbasaur",
    description:
      "LLorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, et ipsam neque laudantium modi rem!",
    imageUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
  },
  {
    title: "ivysaur",
    description:
      "LLorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, et ipsam neque laudantium modi rem!",
    imageUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
  },
];

export default function Game() {
  const { score, chooseCard } = useMemoryCardGame();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [cardsStatus, setCardsStatus] = useState<
    "entering" | "mounted" | "exiting"
  >("mounted");

//   useEffect(() => {
//     setInterval(() => {
//         setCardsStatus(s => 
//             s === 'entering'
//                 ? 'mounted'
//                 : s === 'mounted'
//                     ? 'exiting'
//                     : 'entering')
//     }, 1000);
//   }, [])

  return (
    <Container>
      <CardContainer>
        {cards.map((card, i) => (
          <MemoryCard
            key={i}
            card={card}
            disabled={i > 0}
            revealed={i % 2 == 0}
            style={{
              transform:
                cardsStatus === "entering"
                  ? "translateX(-100dvw)"
                  : cardsStatus === "mounted"
                    ? "translateX(0dvw)"
                    : "translateX(100dvw)",
              transition:
                cardsStatus === "entering"
                  ? "none"
                  : cardsStatus === "mounted"
                    ? `var(--card-transition) ${i * 100}ms`
                    : `var(--card-transition) ${i * 100}ms`,
            }}
          />
        ))}
      </CardContainer>
    </Container>
  );
}

const Container = styled.main`
  position: relative;
  background-color: var(--THEME_COLOR_01);
  box-shadow: var(--SHADOW_INSET_ELEVATION_HIGH);
  border-radius: 8px;
  flex: 1;
`;

const CardContainer = styled.section`
  position: absolute;
  padding: 32px;
  inset: 0px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  grid-auto-rows: 360px;
  overflow-y: auto;
  perspective: 3000px;
  transform-style: preserve-3d;
`;
