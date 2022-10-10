<script>
	import { scale } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import { onMount } from 'svelte';

	let animate = false;

	onMount(() => {
		animate = true;
	});
</script>

{#if animate}
	<div transition:scale="{{duration: 10000, delay: 100, opacity: 0.5, start: 0.2, easing: quintOut}}">
		<h1 class="centered">Welcome to the show!</h1>
	</div>
{/if}

<style>
	div {
		padding-top: 200px;
		font-family: arial;
		font-size: 50px;
	}
	.centered {
		text-align: center;
		color: white;
	}
</style>
