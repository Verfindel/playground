<script lang="ts">
    import { tileStore } from "$lib/stores/tileStore";
	import Mirrored from "./Mirrored.svelte";

	function handleTileClicked(event: MouseEvent) {
        const tile = event.target as HTMLElement;

        if(tile.className.indexOf("tile") === -1)
            return;

        if(tile !== null && tile !== undefined) {
            if(tile.id !== "" && tiles.indexOf(tile) === -1){
                tileStore.update((tiles) => {
                    tile.classList.add("selected");
                    tiles.push(tile);
                    return tiles;
                });
            }
        }
	}

    $: tiles = $tileStore;
</script>

<section>
    <div on:click={handleTileClicked}>
        <div>
            <div class="wrapper">
                <div class="tile" id="0"></div>
                <div class="tile" id="1"></div>
                <div class="tile" id="2"></div>
            </div>
            <div class="wrapper">
                <div class="tile" id="3"></div>
                <div class="tile" id="4"></div>
                <div class="tile" id="5"></div>
            </div>
            <div class="wrapper">
                <div class="tile" id="6"></div>
                <div class="tile" id="7"></div>
                <div class="tile" id="8"></div>
            </div>
        </div>
    </div>
    <Mirrored />
</section>

<style>
    section {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }
    .wrapper {
        display: flex;
        flex-direction: row;
        padding-left: 10px;
    }
    .tile {
        width: 100px;
        height: 100px;
        border: 1px solid black;
    }
    div:global(.selected){
        background-color: red;
    }
</style>