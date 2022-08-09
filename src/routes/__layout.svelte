<script>
import Nav from "$lib/Nav.svelte";
</script>

<Nav></Nav>

<div>
    <slot></slot>
</div>


<style>
    div {
        background-color: aquamarine;
        min-height: 100vh;
        padding: 1rem;
    }
</style>