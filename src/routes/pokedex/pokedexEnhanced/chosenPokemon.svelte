<script lang="ts">
	import { Avatar, Heading, Listgroup, ListgroupItem } from "flowbite-svelte";
    import { chosenPokemon } from "$lib/stores/pokedexStore";
    import type { Pokemon } from "pokenode-ts";

    function removePokemonFromCollection(pokemon : Pokemon) {
        chosenPokemon.update((chosenPokemon) => {
            chosenPokemon.splice(chosenPokemon.indexOf(pokemon), 1);
            return chosenPokemon;
        });
    }
</script>

{#if $chosenPokemon &&  $chosenPokemon.length > 0}
    <section>
        <Heading tag="h3">Your Pokemon</Heading>
        <Listgroup active class="w-48 overflow-auto scrollbar">
            {#each $chosenPokemon as pokemon}
                <div  on:click|preventDefault={() => removePokemonFromCollection(pokemon)}>
                    <ListgroupItem class="text-base font-semibold gap-2">
                        <Avatar src="{pokemon.sprites.front_default ?? undefined}" size="xs"/>{pokemon.name}
                    </ListgroupItem>
                </div>
            {/each}
        </Listgroup>
    </section>
{:else }    
    <section>
        <Heading tag="h1">Time to add some Pokemon!</Heading>
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