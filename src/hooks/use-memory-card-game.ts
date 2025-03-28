import { useCallback, useRef } from "react";
import useLocalStorage from "./use-local-storage";

export default function useMemoryCardGame() {
  const { storage: score, updateLocalStorage } = useLocalStorage<{
    best: number;
    current: number;
  }>("@GAME_SCORE", {
    best: 0,
    current: 0,
  });

  const chosenCards = useRef<Set<string>>(new Set());

  const chooseCard = useCallback(
    (identifier: string) => {
      const updatedScore = { ...score };
      if (chosenCards.current.has(identifier)) {
        chosenCards.current.clear();
      } else {
        chosenCards.current.add(identifier);
      }
      updatedScore.current = chosenCards.current.size;
      updatedScore.best = Math.max(updatedScore.best, updatedScore.current);
      updateLocalStorage(updatedScore);
      return updatedScore.current !== 0;
    },
    [score, updateLocalStorage],
  );

  return { score, chooseCard };
}
