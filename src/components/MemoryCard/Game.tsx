import { useEffect, useState } from "react";
import styled from "styled-components";

import { MemoryCard } from ".";
import { Card, Transition } from "../../types";
import useMemoryCardGame from "../../hooks/use-memory-card-game";
import useCards from "../../hooks/use-cards";
import Spinner from "../Spinner";

export default function Game() {
  const { cards, error, loading, shuffle, refreshPokemon } = useCards();
  const { chooseCard } = useMemoryCardGame();

  const BASE_DELAY = 750;
  const delay = BASE_DELAY + cards.length * 100;

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

  function handleRefresh() {
    (async () => {
      await refreshPokemon();
    })();
  }

  useEffect(() => {
    if (cardsTransition !== Transition.ENTERING) return;
    setCardsTransition(Transition.MOUNTED);
    shuffle();
  }, [cardsTransition, shuffle]);

  useEffect(() => {
    if (cardsTransition !== Transition.MOUNTED) return;
    setTimeout(() => {
      setIsEnabled(true);
    }, delay);
  }, [cardsTransition, delay]);

  useEffect(() => {
    if (cardsTransition !== Transition.EXITING) return;
    setTimeout(() => {
      setCardsTransition(Transition.ENTERING);
    }, delay * 2);
  }, [cardsTransition, delay]);

  return (
    <Container>
      {loading ? (
        <Spinner />
      ) : error || cards.length === 0 ? (
        <Error>
          <Message>{error || "Something went wrong"}</Message>
          <Button onClick={handleRefresh}>Try again</Button>
        </Error>
      ) : (
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
      )}
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

const Error = styled.section`
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: absolute;
  inset: 0;
  margin: auto;
  width: fit-content;
  height: fit-content;
`;

const Message = styled.span`
  color: var(--THEME_COLOR_04);
  text-align: center;
  font-size: 1.25rem;
`;

const Button = styled.button`
  align-self: center;
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  background-color: var(--THEME_COLOR_04);
  color: var(--THEME_COLOR_01);
  transition: filter 500ms ease-out;
  &:hover {
    filter: brightness(1.8);
    transition: filter 150ms ease-in;
  }
`;
