<script>
    import { pokestore1, pokestore2, populatePokemonStore2 } from "$lib/stores/pokedexStore.svelte";
    import { Avatar, Button, Card } from "flowbite-svelte"

    $:pokemon1 = pokestore1;
    $:pokemon2 = pokestore2;
</script>

<Card>
    <h5>{$pokemon2.species.name}</h5>
    <Avatar src="{$pokemon2.sprites.front_default ?? undefined}" alt="{$pokemon2.name}" size="xl" rounded/>    
    <Button on:click={() => populatePokemonStore2($pokemon1.id)}>Reload Pokemon</Button>
</Card>