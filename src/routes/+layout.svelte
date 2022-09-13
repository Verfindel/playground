<script>
	import '../app.postcss';
	import Nav from '$lib/Nav.svelte';
    import { DarkMode } from "flowbite-svelte";
</script>

<DarkMode />
<Nav></Nav>
<slot />
