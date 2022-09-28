<script lang="ts">
    import { selectedPokemon } from "$lib/stores/pokedexStore";
	import { Heading } from "flowbite-svelte";
</script>

{#if $selectedPokemon && $selectedPokemon.id > 0}
    <section>
        <Heading tag="h1">{$selectedPokemon.species.name}</Heading>
        <img src="{$selectedPokemon.sprites.front_default ?? undefined}" alt="{$selectedPokemon.name}" />
    </section>
{:else}
    <section>
        <Heading tag="h1">No Pokemon Selected</Heading>
    </section>
{/if}