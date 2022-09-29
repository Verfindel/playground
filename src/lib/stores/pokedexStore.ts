import { writable } from 'svelte/store'
import type { Pokemon } from "pokenode-ts";
import { browser } from "$app/env";

export const pokemonStore = writable<Pokemon[]>(browser ? JSON.parse(localStorage.getItem('pokemon')??'{}'): {})

export const selectedPokemon = writable<Pokemon>()

// export const selectedPokemon = writable<Pokemon>(browser ? JSON.parse(localStorage.getItem('selectedPokemon')??'{}'): {})

if (browser){
    pokemonStore.subscribe((value) => localStorage.pokemon = JSON.stringify(value))
    // selectedPokemon.subscribe((value) => localStorage.selectedPokemon = JSON.stringify(value))
}