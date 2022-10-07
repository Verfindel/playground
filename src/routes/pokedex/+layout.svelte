<script lang="ts">
    import { page } from '$app/stores';
    import { Sidebar, SidebarGroup, SidebarItem, SidebarWrapper } from 'flowbite-svelte';
    import { clientSession } from "$lib/stores/sessionStore";
    $: activeUrl = $page.url.pathname;
    $: console.log($clientSession);
</script>
<section>
<Sidebar>
<SidebarWrapper>
    <SidebarGroup>
    <!-- {#if !$clientSession}
        <SidebarItem label="Log In" href='/pokedex/' active={activeUrl === '/pokedex/'} >
            <svelte:fragment slot="icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>
            </svelte:fragment>
        </SidebarItem>
    {:else}
        <SidebarItem label="Log Out" href='/pokedex/' active={activeUrl === '/pokedex/'} >
            <svelte:fragment slot="icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>
            </svelte:fragment>
        </SidebarItem> -->        
        <SidebarItem label="I need a quote" href='/pokedex/' active={activeUrl === '/pokedex/'} >
            <svelte:fragment slot="icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>
            </svelte:fragment>
        </SidebarItem>

        <SidebarItem label="Old Pokedex" href='/pokedex/pokedexOld' active={activeUrl === '/pokedex/pokedexOld'} >
            <svelte:fragment slot="icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>
            </svelte:fragment>
        </SidebarItem>
        
        <SidebarItem label="New Pokedex" href='/pokedex/pokedexEnhanced' active={activeUrl === '/pokedex/pokedexEnhanced'}>
            <svelte:fragment slot="icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>
            </svelte:fragment>
        </SidebarItem>
        
        <SidebarItem label="Your Pokedex" href='/pokedex/usersPokemon' active={activeUrl === '/pokedex/usersPokemon'}>
            <svelte:fragment slot="icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>
            </svelte:fragment>
        </SidebarItem>
    <!-- {/if} -->
    </SidebarGroup>
</SidebarWrapper>
</Sidebar>
    
<main class="container mx-auto lg:pl-30 pr-8 dark:text-white ">
    <slot />
</main>
</section>

<style>
    section{        
        display: flex;
        flex-direction: row;
    }
</style>