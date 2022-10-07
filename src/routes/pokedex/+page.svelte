<script lang="ts">
    import { clientSession } from "$lib/stores/sessionStore";
	import Auth from "./Auth.svelte";
	import LogOut from "./LogOut.svelte";
    import { supabase } from '$lib/clients/supabaseClient';
	import { onMount } from "svelte";
	import type { PageData } from "./$types";
	import { Card } from "flowbite-svelte";

    // onMount(() => {
    //     // Supabase ain't the most stable, so we gotta call the getSession() twice
    //     supabase.auth.getSession();
    //     supabase.auth.getSession().then(({ data }) => {
    //         clientSession.set(data.session);
    //     });

    //     supabase.auth.onAuthStateChange((_event, _session) => {
    //         clientSession.set(_session);
    //     });
    // });

    export let data : PageData;
</script>
<section>
    <Card padding='sm'>
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.quote}</h5>
        <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight">
          {data.author}
        </p>
    </Card>
</section>
<!-- {#if !$clientSession}
    <Auth />poo
{:else}
    <LogOut />
{/if} -->

<style>
    section {
        display: grid;
        place-items: center;
        align-content: center;
        min-height: fit-content;
        min-width: 30%;
        padding-top: 50px;
    }
</style>