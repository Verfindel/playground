<script>
    import { pokestore1, pokestore2, populatePokemonStore2 } from "$lib/stores/pokedexStore.svelte";
    import { Avatar, Button, Card, Heading } from "flowbite-svelte"

    $:pokemon1 = pokestore1;
    $:pokemon2 = pokestore2;
</script>

<Card>
    <section>
        <Heading>{$pokemon2.species.name}</Heading>
        <Avatar src="{$pokemon2.sprites.front_default ?? undefined}" alt="{$pokemon2.name}" size="xl" rounded/>    
        <Button on:click={() => populatePokemonStore2($pokemon1.id)}>Reload Pokemon</Button>
    </section>
</Card>

<style>
    section {
        display: grid;
        place-items: center;
        align-content: center;
        min-height: fit-content;
        min-width: 50%;
    }
</style>