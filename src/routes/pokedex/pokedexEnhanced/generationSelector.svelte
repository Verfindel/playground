<script lang="ts">
	import { Button, ButtonGroup, Heading } from "flowbite-svelte";
    import { getPokemonIds, getPokemon } from "$lib/api/pokeApi";
    import { generationResource } from '$lib/stores/generationStore';

    function formatName(name: string): string{
        name = name.replace(/-.*/g, (match) => match.toUpperCase());                                
        return name.charAt(0).toUpperCase() + name.slice(1);
    }

    function loadPokemon(generation: string){
        getPokemonIds(generation).then((data) => {
            getPokemon(data.slice(0, 25));
        });
    }

</script>

<div class="list-item">
    <Heading tag="h3">Choose a generation</Heading>
    <ButtonGroup>
        <ul>
            {#each $generationResource as generation}
                <li class="list-content">
                    <Button color="light" on:click={() => loadPokemon(generation.name)}>{formatName(generation.name)}</Button>
                </li>
            {/each}
        </ul>
    </ButtonGroup>
</div>

<style>
    .list-content {
        width: 100%;
    }
</style>