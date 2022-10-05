<script lang="ts">
	import { selectedPokemon } from "$lib/stores/pokedexStore";
	import { Avatar, Card, Heading } from "flowbite-svelte";
	
	let email : string;

	/** @type {import('./$types').ActionData} */
	export let form : any;

	$: pokemon = $selectedPokemon;
	$: types = pokemon ? pokemon.types : [];
</script>

{#if form?.success}
	<form class="row flex-center flex" method="POST" action="?/login">
		<div class="col-6 form-widget">
		<h1 class="header">Supabase + Svelte</h1>
		<p class="description">Sign in via magic link with your email below</p>
		<div>
			<input
				class="inputField"
				type="email"
				placeholder="Your email"
				bind:value="{email}"
			/>
		</div>
		<div>
			<input type="submit" class='button block' value={form?.success ? "Loading" :
			"Send magic link"} disabled={form?.success} />
		</div>
		</div>
	</form>
{:else}
	{#if pokemon && pokemon != undefined && pokemon.id && pokemon.id > 0}
		<form action="?/registerPokemon">
			<Card padding='sm'>
				<Heading tag="h3">Store this pokemon?</Heading>
				<div class="flex flex-col items-center pb-4">
					<Avatar size="lg" src="{pokemon.sprites.front_default ??  undefined}" />
					<h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{pokemon.name}</h5>
					<span class="text-sm text-gray-500 dark:text-gray-400">{pokemon.species.name}</span>
					<input name="pokemonId" type="hidden" value="{pokemon.id}">
					<input name="pokemonData" type="hidden" value="{JSON.stringify(types)}">
					<div class="flex mt-4 space-x-3 lg:mt-6">				
						<button>Register Pokemon</button>
					</div>
				</div>
			</Card>
		</form>
	{:else}
		<h1>Nothing to see here</h1>
	{/if}
{/if}