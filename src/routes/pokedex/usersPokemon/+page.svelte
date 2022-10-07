<script lang="ts">
	import { selectedPokemon, chosenPokemon } from "$lib/stores/pokedexStore";
	import type { ActionData } from "./$types";
	import { Avatar, Card, Heading, Listgroup, ListgroupItem } from "flowbite-svelte";	

	export let form : ActionData

	$: pokemon = $selectedPokemon;
</script>

<section>
	{#if pokemon && pokemon != undefined && pokemon.id && pokemon.id > 0}
		<form method="POST" action="?/registerPokemon">
			<Card padding='sm'>
				<Heading tag="h3">Store this pokemon?</Heading>
				<div class="flex flex-col items-center pb-4">
					<Avatar size="lg" src="{pokemon.sprites.front_default ??  undefined}" />
					<h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{pokemon.name}</h5>
					<span class="text-sm text-gray-500 dark:text-gray-400">{pokemon.species.name}</span>
					<input name="pokemonId" type="hidden" value="{pokemon.id}">
					<div class="flex mt-4 space-x-3 lg:mt-6">				
						<button>Register Pokemon</button>
					</div>
				</div>
			</Card>
		</form>
	{:else}
		<h1>No Pokemon to register</h1>
	{/if}

	{#if $chosenPokemon.length > 0}
		<Heading tag="h3">Click to remove a Pokemon</Heading>
		<Listgroup active class="w-48 overflow-auto scrollbar">
			<form method="POST">
				{#each $chosenPokemon as pokemon}
					<input name="pokemonId" type="hidden" value="{pokemon.id}">
					<button formaction="?/removePokemon">
						<ListgroupItem class="text-base font-semibold gap-2"}>
							<Avatar src="{pokemon.sprites.front_default ?? undefined}" size="xs"/>{pokemon.name}
						</ListgroupItem>
					</button>
				{/each}
			</form>
		</Listgroup>
	{:else}		
		<h1>You haven't chosen any pokemon!</h1>
	{/if}
</section>

<style>	
    section {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }
</style>