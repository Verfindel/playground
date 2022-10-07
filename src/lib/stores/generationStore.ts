import { writable } from 'svelte/store'
import type { NamedAPIResource } from "pokenode-ts";
import { browser } from "$app/environment";

export const generationResource = writable<NamedAPIResource[]>(browser ? JSON.parse(localStorage.getItem('namedAPIResource')??'{}'): {})

if (browser){
    if(localStorage){
        generationResource.subscribe((value) => localStorage.namedAPIResource = JSON.stringify(value))
    }
}