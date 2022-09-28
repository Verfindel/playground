import { error } from '@sveltejs/kit';
import { GameClient, type NamedAPIResource } from "pokenode-ts";
import { apiResources } from '$lib/stores/generationStore';
import type { Writable } from 'svelte/store';
import { get } from 'svelte/store'

export const ssr = false;
/** @type {import('./$types').PageLoad} */
export async function load() : Promise<Writable<NamedAPIResource[]>> {
  let value = get(apiResources);
  if(value.length && value.length > 0) {
    return apiResources;
  }
  const pokemonClient = new GameClient();
  const generations = await pokemonClient.listGenerations();

  if (generations) {
      apiResources.set(generations.results);
      return apiResources;
  }
 
  throw error(404, 'Not found');
}