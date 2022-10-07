import { GameClient } from "pokenode-ts";
import { generationResource } from '$lib/stores/generationStore';
import { get } from 'svelte/store'

/** @type {import('./$types').PageLoad} */
export async function load() {
	let value = get(generationResource);
	if(value.length && value.length > 0) {
			return generationResource;
	}
	const pokemonClient = new GameClient();
	const generations = await pokemonClient.listGenerations();

	if (generations) {
		generationResource.set(generations.results);
	}
}