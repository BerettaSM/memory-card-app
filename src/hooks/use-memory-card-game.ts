import { useContext } from "react";
import { MemoryCardGameContext } from "../context/MemoryCardGameContext";

export default function useMemoryCardGame() {
  return useContext(MemoryCardGameContext);
}
