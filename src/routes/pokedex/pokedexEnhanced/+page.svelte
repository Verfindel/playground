<script lang="ts">
	import PokemonDetails from "$lib/components/PokedexEnhanced/pokemonDetails.svelte";
	import GenerationSelector from "$lib/components/PokedexEnhanced/generationSelector.svelte";
	import PokemonSelector from "$lib/components/PokedexEnhanced/pokemonSelector.svelte";
	import ChosenPokemon from "$lib/components/PokedexEnhanced/chosenPokemon.svelte";
</script>

<div class="container">
    <div class="list-item">
        <GenerationSelector />
    </div>
    <div>
        <PokemonSelector />
    </div>
    <div>
        <PokemonDetails class="list-item"/>
    </div>
    <div >
        <ChosenPokemon />
    </div>
</div>

<style>
    .container{
        display: grid;
        overflow: hidden;
        grid-template-columns: repeat(2, 1fr);
        grid-auto-rows: 0.5fr 1fr;
        grid-column-gap: 5px;
        grid-row-gap: 5px;
        max-width: 100%;
        max-height: 750px;
    }
    .list-item {
        display: flex;
        padding: 0.5em;
        margin-bottom: 20px;
    }
</style>