<script lang="ts" context="module">
    import { PokemonClient } from "pokenode-ts";
    import { writable } from "svelte/store";

    const client = new PokemonClient();

    export const pokeman1 = writable<Pokemon>();
    export const pokeman2 = writable<Pokemon>();
</script>

<script lang="ts">
    import type { Pokemon } from "pokenode-ts";
    import { randomNumber } from "$lib/generators/randomNumber";

    export async function createPokemon() {
        let pokemon1 = await client.getPokemonById(randomNumber(1, 151, -1));
        let pokemon2 = await client.getPokemonById(randomNumber(1, 151, pokemon1.id));

        pokeman1.set(pokemon1);
        pokeman2.set(pokemon2);
    }
</script>