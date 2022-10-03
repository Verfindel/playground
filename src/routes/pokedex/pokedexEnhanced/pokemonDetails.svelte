<script lang="ts">
    import { selectedPokemon } from "$lib/stores/pokedexStore";
	import { Avatar, Button, Card, Dropdown, DropdownItem, Heading, ToolbarButton } from "flowbite-svelte";

    $: pokemon = $selectedPokemon;
    $: pokemon, console.log(pokemon);
</script>

{#if pokemon && pokemon.id > 0}
    <section>
        <Card padding='sm'>
            <div class="flex justify-end">
            <ToolbarButton class="dots-menu text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" /></svg>
            </ToolbarButton>
            <Dropdown class="w-36" triggeredBy=".dots-menu">
                <DropdownItem>Edit</DropdownItem>
                <DropdownItem>Export data</DropdownItem>
                <DropdownItem>Delete</DropdownItem>
            </Dropdown>
            </div>
            <div class="flex flex-col items-center pb-4">
            <Avatar size="lg" src="{pokemon.sprites.front_default ??  undefined}" />
                <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{pokemon.name}</h5>
                <span class="text-sm text-gray-500 dark:text-gray-400">{pokemon.species.name}</span>
                <div class="flex mt-4 space-x-3 lg:mt-6">
                <Button>Add Pokemon</Button>
                <Button color="light" class="dark:text-white">Message</Button>
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
        display: grid;
        place-items: center;
        align-content: center;
        min-height: fit-content;
        min-width: 30%;
    }
</style>