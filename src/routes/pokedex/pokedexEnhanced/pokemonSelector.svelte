<script>
	import { Avatar, Heading, Listgroup, ListgroupItem } from "flowbite-svelte";
    import { pokemonStore, selectedPokemon } from "$lib/stores/pokedexStore";

    $: numberOfPokemonLoaded = $pokemonStore.length;
</script>

{#if numberOfPokemonLoaded > 0}
<Listgroup active class="list-item w-48 overflow-auto scrollbar">
    {#each $pokemonStore as pokemon}
    <div class="list-content">
        <ListgroupItem class="text-base font-semibold gap-2" on:click={() => selectedPokemon.set(pokemon)}>
            <Avatar src="{pokemon.sprites.front_default ?? undefined}" size="xs"/>{pokemon.name}
        </ListgroupItem>
    </div>
    {/each}
</Listgroup>
{/if}