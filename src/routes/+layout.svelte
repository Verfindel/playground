<script>
	import '../app.postcss';
	import Nav from '$lib/components/Nav.svelte';
    import { DarkMode } from "flowbite-svelte";
</script>

<DarkMode />
<Nav></Nav>
<slot />
