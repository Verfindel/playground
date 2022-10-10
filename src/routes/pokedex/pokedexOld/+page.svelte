<script lang="ts">
    import { populatePokemonStores, pokestore1, pokestore2 } from "$lib/stores/pokedexStore.svelte";
    import { Heading } from "flowbite-svelte"
    import { onMount } from "svelte";
	import Pokemon1 from "$lib/components/PokedexOld/pokemon1.svelte";
	import Pokemon2 from "$lib/components/PokedexOld/pokemon2.svelte";

    onMount(() => {
        populatePokemonStores();
    });

    $:pokemon1 = pokestore1;
    $:pokemon2 = pokestore2;
</script>

<section>
    <Heading tag="h1">Pokedex</Heading>
    {#if $pokemon1 && $pokemon2}
    <div class="grid md:grid-cols-2 border-0">
        <Pokemon1 />
        <Pokemon2 />
    </div>
    {:else}
        <div>Couldn't find any pokemon</div>
    {/if}
</section>

<style>
    section {
        display: grid;
        place-items: center;
        align-content: center;
        vertical-align: center;
        min-height: fit-content;
        min-width: inherit;
    }
</style>