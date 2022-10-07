<script lang="ts">
    import { selectedPokemon, chosenPokemon } from "$lib/stores/pokedexStore";
	import { Avatar, Button, Card, Dropdown, DropdownItem, Heading, ToolbarButton } from "flowbite-svelte";

    function addChosenPokemon() {
        chosenPokemon.update((chosenPokemon) => {
            if($selectedPokemon !== null && !chosenPokemon.includes($selectedPokemon)) {
                chosenPokemon = [...chosenPokemon, $selectedPokemon];
            }
            return chosenPokemon;
        });
    }

    $: pokemon = $selectedPokemon;
	$: pokemon, console.log(pokemon ? JSON.stringify(pokemon.types) ?? "No types": "No pokemon");
</script>

{#if pokemon && pokemon.id > 0}
    <section>
        <Card padding='sm'>
            <div class="flex flex-col items-center pb-4">
                <Avatar size="lg" src="{pokemon.sprites.front_default ??  undefined}" />
                <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Species: {pokemon.name}</h5>
                <span class="text-sm text-gray-500 dark:text-gray-400">Height: {pokemon.height / 10} m</span>
                <span class="text-sm text-gray-500 dark:text-gray-400">Weight: {pokemon.weight / 10} kg</span>
                <div class="flex mt-4 space-x-3 lg:mt-6">
                    <Button on:click={addChosenPokemon}>Add Pokemon</Button>
                </div>
            </div>
        </Card>
    </section>
{:else}
    <section>
        <Heading tag="h1">No Pokemon Selected</Heading>
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