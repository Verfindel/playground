<script lang="ts">
    import { Navbar, NavLi, NavUl } from 'flowbite-svelte'
	import { page } from '$app/stores';

	$: activeUrl = $page.url.pathname;
</script>

<Navbar>
	<NavUl>
		<NavLi href="/" active={activeUrl === "/"}>Home</NavLi>
		<NavLi href="/badjokes" active={activeUrl === "/badjokes"}>Bad Jokes</NavLi>
		<NavLi href="/pokedex" active={activeUrl === "/pokedex"}>Pokedex</NavLi>
		<NavLi href="/tileClicker" active={activeUrl === "/tileClicker"}>Tile Clicker</NavLi>
		<nav>
			<a href="/products" data-sveltekit-prefetch>Products</a>
		</nav>
	</NavUl>
</Navbar>