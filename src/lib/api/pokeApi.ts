import { GameClient, PokemonClient } from "pokenode-ts";
import { pokemonStore } from '$lib/stores/pokedexStore';


export async function getPokemonIds(generationName: string) : Promise<string[]> {
    const pokemonClient = new GameClient();
    const generation = await pokemonClient.getGenerationByName(generationName);
    return generation.pokemon_species.map((pokemon) => pokemon.name);
}

export async function getPokemon(pokemonNames: string[]) {
    const pokemonClient = new PokemonClient();
    let pokemon = await Promise.all(pokemonNames.map((pokemonName) => pokemonClient.getPokemonByName(pokemonName)));
    pokemonStore.set(pokemon);
}