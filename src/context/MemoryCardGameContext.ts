import { createContext } from "react";

export interface MemoryCardGameContext {
  score: {
    best: number;
    current: number;
  };
  chooseCard(identifier: string): boolean;
}

export const MemoryCardGameContext = createContext({} as MemoryCardGameContext);
