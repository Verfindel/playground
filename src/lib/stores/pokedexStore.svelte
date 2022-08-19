<script lang="ts">
    import type { Pokeman } from "../jsonConverters/pokemanConverter";
    import { onMount } from "svelte";
    import { Query } from "$lib/api/query";
    import { writable } from "svelte/store";
    import { get } from "../api/api"
    import { Convert } from "../jsonConverters/pokemanConverter"
    import { randomNumber } from "$lib/generators/randomNumber";

    export const pokeman1 = writable<Pokeman>();
    export const pokeman2 = writable<Pokeman>();

    onMount(createPokemon);

    let query = new Query();
    query.base = "https://pokeapi.co/api/v2/pokemon";
    query.body = "";

    export async function createPokemon() {
        query.path = randomNumber(1, 151, -1).toString();
        const res = await get(query);
        query.path = randomNumber(1, 151, Number.parseInt(query.path)).toString();
        const res2 = await get(query);
        
        const parsedData = res.results.map((result: any) => {
            try {
                let action = Convert.toPokeman(JSON.stringify(result));
                return action;
            } catch (error) {
                console.log('Pokeman error: ', error);
            }
        }, []);

        const parsedData2 = res2.results.map((result: any) => {
            try {
                let action = Convert.toPokeman(JSON.stringify(result));
                return action;
            } catch (error) {
                console.log('Pokeman error', error);
            }
        }, []);

        pokeman1.set(parsedData);
        pokeman2.set(parsedData2);
    }
</script>