import { useCallback, useEffect, useState } from "react";
import { Card } from "../types";
import { getNUniqueRandomNumbers, mapPokeapiResponseToCard } from "../utils";
import { fetchPokemonsById } from "../http";

const TOTAL_POKEMON = 10;
const FIRST_POKEMON_ID = 1;
const LAST_POKEMON_ID = 1025;

export default function useCards() {
  const [cards, setCards] = useState<Card[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const refreshPokemon = useCallback(async () => {
    setLoading(true);
    setError("");
    const randomIds = getNUniqueRandomNumbers(
      TOTAL_POKEMON,
      FIRST_POKEMON_ID,
      LAST_POKEMON_ID,
    );

    try {
      const pokemon = await fetchPokemonsById(...randomIds);
      setCards(pokemon.map(mapPokeapiResponseToCard));
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        throw err;
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (cards.length) return;
    (async () => {
      await refreshPokemon();
    })();
  }, [cards, refreshPokemon]);

  const shuffle = useCallback(() => {
    if (cards.length === 0) return;
    const randomPositions = getNUniqueRandomNumbers(
      cards.length,
      0,
      cards.length - 1,
    );
    const shuffledCards = [...cards];
    for (let i = 0; i < cards.length; i++) {
      shuffledCards[randomPositions[i]] = cards[i];
    }
    setCards(shuffledCards);
  }, [cards]);

  return { cards, loading, error, shuffle, refreshPokemon };
}
