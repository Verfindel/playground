<script>
    import { pokestore1, pokestore2, populatePokemonStore1 } from "$lib/stores/pokedexStore.svelte";
    import { Avatar, Button, Card, Heading } from "flowbite-svelte"

    $:pokemon1 = pokestore1;
    $:pokemon2 = pokestore2;
</script>

<Card>
    <section>
        <Heading>{$pokemon1.species.name}</Heading>
        <Avatar src="{$pokemon1.sprites.front_default ?? undefined}" alt="{$pokemon1.name}" size="xl" rounded/>    
        <Button on:click={() => populatePokemonStore1($pokemon2.id)}>Reload Pokemon</Button>
    </section>
</Card>

<style>
    section {
        display: grid;
        place-items: center;
        align-content: center;
        min-height: fit-content;
        min-width: 30%;
    }
</style>