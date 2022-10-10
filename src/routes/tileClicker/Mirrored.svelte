<script lang="ts">
    import { tileStore } from "$lib/stores/tileStore";

	function handleMirroredTileClicked(_event: MouseEvent) {
        if($tileStore.length >= 9) {
            tileStore.update((tiles) => {
                const removeInterval = setInterval(() => {
                    const tile = tiles.shift() as HTMLElement;
                    let mirroredTileId = tile.id +"-mirror";
                    (document.getElementById(mirroredTileId.toString()) as HTMLElement).classList.remove("selected");
                    tile.classList.remove("selected");
                    if(tiles.length === 0){
                        triggered = false;
                        clearInterval(removeInterval);
                    }
                }, 200);
                
                return tiles;
            });
        }
	}

    let triggered : Boolean = false;

    $: tiles = $tileStore;
    $: {
        if(tiles.length >= 9 && !triggered) {
            console.log("triggered");
            tiles.forEach((tile, i) => {
                setTimeout(() => {
                    let mirroredTileId = tile.id +"-mirror";
                    let mirroredTile = document.getElementById(mirroredTileId.toString()) as HTMLElement;
                    mirroredTile?.classList.add("selected");
                    
                    if(tiles.indexOf(tile) === tiles.length - 1) {
                        triggered = true;
                    }
                }, i * 200);
            });
        }
    }
</script>

<section on:click={handleMirroredTileClicked}>
    <div class="wrapper">
        <div class="tile" id="0-mirror"></div>
        <div class="tile" id="1-mirror"></div>
        <div class="tile" id="2-mirror"></div>
    </div>
    <div class="wrapper">
        <div class="tile" id="3-mirror"></div>
        <div class="tile" id="4-mirror"></div>
        <div class="tile" id="5-mirror"></div>
    </div>
    <div class="wrapper">
        <div class="tile" id="6-mirror"></div>
        <div class="tile" id="7-mirror"></div>
        <div class="tile" id="8-mirror"></div>
    </div>
</section>

<style>
    section {
        padding-right: 10px;
    }
    .wrapper {
        display: flex;
        flex-direction: row;
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