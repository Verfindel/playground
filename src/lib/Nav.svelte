<script lang="ts">
    import { Navbar, NavLi, NavUl, NavHamburger } from 'flowbite-svelte'
</script>

<Navbar let:hidden let:toggle>
	<NavHamburger on:click={toggle} />
	<NavUl {hidden}>
		<NavLi href="/" active={true}>Home</NavLi>
		<NavLi href="/badjokes">Bad Jokes</NavLi>
		<NavLi href="/pokedex">Pokedex</NavLi>
	</NavUl>
</Navbar>