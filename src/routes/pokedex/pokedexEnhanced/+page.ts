import { error } from '@sveltejs/kit';
import { GameClient, type NamedAPIResource } from "pokenode-ts";
import { generationResource } from '$lib/stores/generationStore';
import type { Writable } from 'svelte/store';
import { get } from 'svelte/store'

/** @type {import('./$types').PageLoad} */
export async function load() : Promise<Writable<NamedAPIResource[]>> {
  let value = get(generationResource);
  if(value.length && value.length > 0) {
    return generationResource;
  }
  const pokemonClient = new GameClient();
  const generations = await pokemonClient.listGenerations();

  if (generations) {
      generationResource.set(generations.results);
      return generationResource;
  }
 
  throw error(404, 'Not found');
}