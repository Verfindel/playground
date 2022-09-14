<script lang="ts">
    import { populatePokemonStores, pokestore1, pokestore2, populatePokemonStore1, populatePokemonStore2 } from "$lib/stores/pokedexStore.svelte";
    import { Card } from "flowbite-svelte"
    import { onMount } from "svelte";
	import Pokemon1 from "./pokemon1.svelte";
	import Pokemon2 from "./pokemon2.svelte";

    onMount(() => {
        populatePokemonStores();
    });

    $:pokemon1 = pokestore1;
    $:pokemon2 = pokestore2;
</script>

<h5 class="center">Pokedex</h5>
{#if $pokemon1 && $pokemon2}
<Card padding="md" size="xl" class="grid md:grid-cols-2 center border-0">
    <Pokemon1 />
    <Pokemon2 />
</Card>
{:else}
     <div>Couldn't find any pokemon</div>
{/if}