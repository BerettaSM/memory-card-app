import { type PropsWithChildren, useCallback, useRef, useState } from "react";
import { MemoryCardGameContext } from "../context/MemoryCardGameContext";
import useLocalStorage from "../hooks/use-local-storage";

export function MemoryCardGameContextProvider({ children }: PropsWithChildren) {
  const { storage: bestScore, updateLocalStorage } = useLocalStorage<number>(
    "@BEST_SCORE",
    0,
  );

  const [currentScore, setCurrentScore] = useState(0);

  const chosenCards = useRef<Set<string>>(new Set());

  const chooseCard = useCallback(
    (identifier: string) => {
      if (chosenCards.current.has(identifier)) {
        chosenCards.current.clear();
      } else {
        chosenCards.current.add(identifier);
      }
      const newCurrentScore = chosenCards.current.size;
      const newBestScore = Math.max(bestScore, newCurrentScore);
      setCurrentScore(newCurrentScore);
      updateLocalStorage(newBestScore);
      return newCurrentScore !== 0;
    },
    [bestScore, updateLocalStorage],
  );

  const context = {
    score: {
      current: currentScore,
      best: bestScore,
    },
    chooseCard,
  };

  return (
    <MemoryCardGameContext.Provider value={context}>
      {children}
    </MemoryCardGameContext.Provider>
  );
}
