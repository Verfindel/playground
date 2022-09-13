<script lang="ts" context="module">
    import type { Pokemon } from "pokenode-ts";
    import { PokemonClient } from "pokenode-ts";
    import { writable } from "svelte/store";
    import { randomNumber, getRandomInt } from "$lib/generators/randomNumber";

    const client = new PokemonClient();

    export const pokestore1 = writable<Pokemon>();
    export const pokestore2 = writable<Pokemon>();

    export async function populatePokemonStores() {
        let pokeman1 = await client.getPokemonById(getRandomInt(151, undefined));
        let pokeman2 = await client.getPokemonById(getRandomInt(151, pokeman1.id));

        pokestore1.set(pokeman1);
        pokestore2.set(pokeman2);
    }

    export async function populatePokemonStore1(id: number) {
        let pokeman1 = await client.getPokemonById(getRandomInt(151, id));

        pokestore1.set(pokeman1);
    }

    export async function populatePokemonStore2(id: number) {
        let pokeman2 = await client.getPokemonById(getRandomInt(151, id));

        pokestore2.set(pokeman2);
    }
</script>