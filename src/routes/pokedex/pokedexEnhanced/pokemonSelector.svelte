<script>
	import { Avatar, Listgroup, ListgroupItem, Heading } from "flowbite-svelte";
    import { pokemonStore, selectedPokemon } from "$lib/stores/pokedexStore";
</script>

{#if $pokemonStore && $pokemonStore.length > 0}
    <section>
        <Heading tag="h3">Choose a Pokemon</Heading>
        <Listgroup active class="w-48 overflow-auto scrollbar">
            {#each $pokemonStore as pokemon}
                <div>
                    <ListgroupItem class="text-base font-semibold gap-2" on:click={() => selectedPokemon.set(pokemon)}>
                        <Avatar src="{pokemon.sprites.front_default ?? undefined}" size="xs"/>{pokemon.name}
                    </ListgroupItem>
                </div>
            {/each}
        </Listgroup>
    </section>
{/if}

<style>    
    section {
        place-items: center;
        align-content: center;
        min-height: fit-content;
        min-width: 30%;
    }
</style>