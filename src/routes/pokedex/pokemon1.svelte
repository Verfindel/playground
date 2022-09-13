<script>
    import { pokestore1, pokestore2, populatePokemonStore1 } from "$lib/stores/pokedexStore.svelte";
    import { Avatar, Button, Card } from "flowbite-svelte"

    $:pokemon1 = pokestore1;
    $:pokemon2 = pokestore2;
</script>

<Card>
    <h5>{$pokemon1.species.name}</h5>
    <Avatar src="{$pokemon1.sprites.front_default ?? undefined}" alt="{$pokemon1.name}" size="xl" rounded/>    
    <Button on:click={() => populatePokemonStore1($pokemon2.id)}>Reload Pokemon</Button>
</Card>