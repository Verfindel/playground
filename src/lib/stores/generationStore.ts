import { writable } from 'svelte/store'
import type { NamedAPIResource } from "pokenode-ts";
import { browser } from "$app/env";

export const apiResources = writable<NamedAPIResource[]>(browser ? JSON.parse(localStorage.getItem('namedAPIResource')??'{}'): {})

if (browser){
    if(localStorage){
        apiResources.subscribe((value) => localStorage.namedAPIResource = JSON.stringify(value))
    }
}