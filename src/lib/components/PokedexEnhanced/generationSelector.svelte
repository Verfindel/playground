<script lang="ts">
	import { Button, ButtonGroup, Heading } from "flowbite-svelte";
    import { getPokemonIds, getPokemon } from "$lib/api/pokeApi";
    import { generationResource } from '$lib/stores/generationStore';
	import { getTwoRandomNumbers } from "$lib/generators/randomNumber";

    function formatName(name: string): string{
        name = name.replace(/-.*/g, (match) => match.toUpperCase());                                
        return name.charAt(0).toUpperCase() + name.slice(1);
    }

    function loadPokemon(generation: string){
        getPokemonIds(generation).then((data) => {
            let numbers = getTwoRandomNumbers(data.length);
            getPokemon(data.slice(numbers[0], numbers[1]));
        });
    }

</script>
<section>
    <div class="list-item">
        <Heading tag="h3">Choose a generation</Heading>
        <ButtonGroup>
            <ul>
                {#each $generationResource as generation}
                    <li class="list-content">
                        <Button color="light" 
                            on:click={() => loadPokemon(generation.name)}>{formatName(generation.name)}
                        </Button>
                    </li>
                {/each}
            </ul>
        </ButtonGroup>
    </div>
</section>

<style>
    .list-content {
        width: 100%;
    }
    section {
        display: grid;
        place-items: center;
        align-content: center;
        min-height: fit-content;
        min-width: 30%;
    }
</style>