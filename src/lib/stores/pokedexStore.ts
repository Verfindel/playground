import { writable } from 'svelte/store';
import type { Pokemon } from "pokenode-ts";
import { browser } from "$app/environment";

// export const pokemonStore = writable<Pokemon[]>(browser ? JSON.parse(localStorage.getItem('pokemon')!==''? localStorage.getItem('pokemon')??'[]':'[]'): []);
export const pokemonStore = writable<Pokemon[]>();
export const chosenPokemon = writable<Pokemon[]>(browser ? JSON.parse(localStorage.getItem('chosenPokemon')!=='' ? localStorage.getItem('chosenPokemon')??'[]': '[]'): []);
export const selectedPokemon = writable<Pokemon>()
// export const selectedPokemon = writable<Pokemon | null>(browser ? JSON.parse(localStorage.getItem('selectedPokemon')??'null'): null);

if (browser){
    // pokemonStore.subscribe((value) => localStorage.pokemon = JSON.stringify(value));
    // selectedPokemon.subscribe((value) => localStorage.selectedPokemon = JSON.stringify(value));
    chosenPokemon.subscribe((value) => localStorage.chosenPokemon = JSON.stringify(value));
}