import type { PokeapiResponse } from "../types/http";

const url = "https://pokeapi.co/api/v2/pokemon";

export async function fetchPokemonById(id: number): Promise<PokeapiResponse> {
  const response = await fetch(`${url}/${id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });
  if (!response.ok) {
    throw new Error(`Could not fetch pokemon with id "${id}"`);
  }
  return await response.json();
}

export async function fetchPokemonsById(...ids: number[]) {
  return await Promise.all(ids.map(fetchPokemonById));
}
