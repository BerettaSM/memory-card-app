import { Card, PokeapiResponse } from "../types";

export function mapPokeapiResponseToCard({
  id,
  name,
  sprites: { front_default },
}: PokeapiResponse): Card {
  return { id: `${id}`, title: name, imageUrl: front_default };
}

export function getRandomNumber(min: number, max: number) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

export function getNUniqueRandomNumbers(qty: number, min: number, max: number) {
  const set = new Set<number>();
  while (set.size < qty) {
    set.add(getRandomNumber(min, max));
  }
  return [...set];
}
