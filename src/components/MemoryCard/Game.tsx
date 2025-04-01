import { useEffect, useState } from "react";
import styled from "styled-components";

import { MemoryCard } from ".";
import { Card, Transition } from "../../types";
import useMemoryCardGame from "../../hooks/use-memory-card-game";

const cards: Card[] = [
  {
    id: 'c1',
    title: "ditto",
    description:
      "LLorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, et ipsam neque laudantium modi rem!",
    imageUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
  },
  {
    id: 'c2',
    title: "bulbasaur",
    description:
      "LLorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, et ipsam neque laudantium modi rem!",
    imageUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
  },
  {
    id: 'c3',
    title: "ivysaur",
    description:
      "LLorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, et ipsam neque laudantium modi rem!",
    imageUrl:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
  },
];

export default function Game() {
  const { chooseCard } = useMemoryCardGame();

  const BASE_DELAY = 750;
  const delay = BASE_DELAY + cards.length * 100;

  const [isGameStarted, setIsGameStarted] = useState(true);
  const [isCardEnabled, setIsEnabled] = useState(false);
  const [cardsTransition, setCardsTransition] = useState<Transition>(
    Transition.ENTERING,
  );

  function handleClick(card: Card) {
    chooseCard(card.id);

    setIsEnabled(false);
    setTimeout(() => {
      setCardsTransition(Transition.EXITING);
    }, 500);
  }

  useEffect(() => {
    if (!isGameStarted || cardsTransition !== Transition.ENTERING) return;
    setCardsTransition(Transition.MOUNTED);
  }, [isGameStarted, cardsTransition]);

  useEffect(() => {
    if (!isGameStarted || cardsTransition !== Transition.MOUNTED) return;
    setTimeout(() => {
      setIsEnabled(true);
    }, delay);
  }, [isGameStarted, cardsTransition, delay]);

  useEffect(() => {
    if (!isGameStarted || cardsTransition !== Transition.EXITING) return;
    setTimeout(() => {
      setCardsTransition(Transition.ENTERING);
    }, delay * 2);
  }, [isGameStarted, cardsTransition, delay]);

  return (
    <Container>
      <CardContainer>
        {cards.map((card, i) => (
          <MemoryCard
            key={i}
            card={card}
            onClick={() => handleClick(card)}
            disabled={!isCardEnabled}
            revealed={isCardEnabled}
            style={
              {
                transform:
                  cardsTransition === "entering"
                    ? "translateX(-100dvw)"
                    : cardsTransition === "mounted"
                      ? "translateX(0dvw)"
                      : "translateX(100dvw)",
                transition:
                  cardsTransition === "entering"
                    ? "none"
                    : `var(--card-transition)`,
                "--index": i,
                "--transition-delay": `${BASE_DELAY}ms`,
              } as React.CSSProperties
            }
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
