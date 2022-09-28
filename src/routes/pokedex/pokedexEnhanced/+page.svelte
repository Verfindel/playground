<script lang="ts">
	import { Heading, ButtonGroup, Button, Listgroup, ListgroupItem, Avatar } from "flowbite-svelte";
	import type { NamedAPIResource, Pokemon } from "pokenode-ts";
    import type { Writable } from 'svelte/store';
    import { pokemonStore, selectedPokemon } from "$lib/stores/pokedexStore";
    import { getPokemonIds, getPokemon } from "$lib/api/pokeApi";
	import PokemonDetails from "./pokemonDetails.svelte";

    /** @type {import('./$types').PageData} */
    export let data : Writable<NamedAPIResource[]>;

    function formatName(name: string): string{
        name = name.replace(/-.*/g, (match) => match.toUpperCase());                                
        return name.charAt(0).toUpperCase() + name.slice(1);
    }

    function loadPokemon(generation: string){
        getPokemonIds(generation).then((data) => {
            getPokemon(data.slice(0, 25));
        });
    }

    function selectPokemon(pokemon: Pokemon){
        selectedPokemon.set(pokemon);
    }

    $: numberOfPokemonLoaded = $pokemonStore.length;
</script>

<Heading tag="h3">Choose a generation</Heading>
<div class="container">
    <div class="list-item">
        <ButtonGroup>
            <ul>
                {#each $data as generation}
                    <li class="list-content">
                        <Button outline on:click={() => loadPokemon(generation.name)}>{formatName(generation.name)}</Button>
                    </li>
                {/each}
            </ul>
        </ButtonGroup>
    </div>
    <div class="list-item overflow-auto scrollbar">
        {#if numberOfPokemonLoaded > 0}
            <Listgroup active class="w-48">
                {#each $pokemonStore as pokemon}
                    <div class="list-content">
                        <ListgroupItem class="text-base font-semibold gap-2" on:click={() => selectPokemon(pokemon)}>
                            <Avatar src="{pokemon.sprites.front_default ?? undefined}" size="xs"/>{pokemon.name}
                        </ListgroupItem>
                    </div>
                {/each}
            </Listgroup>
        {/if}
    </div>
    <div>
        <PokemonDetails />
    </div>
</div>
<style>
    .container{
        padding-top: 15px;
        display: grid;
        overflow: hidden;
        grid-template-columns: repeat(2, 1fr);
        grid-auto-rows: 0.5fr 1fr;
        grid-column-gap: 5px;
        grid-row-gap: 5px;
        max-width: 1000px;
        max-height: 500px;
    }
    .list-item {
        display: flex;
        padding: 0.5em;
        margin-bottom: 20px;
    }
    .list-content {
        width: 100%;
    }
</style>