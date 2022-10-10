<script lang="ts">
    import { clientSession } from "$lib/stores/sessionStore";
    import { supabase } from '$lib/clients/supabaseClient';

    $:console.log($clientSession);
</script>

<!-- <form class="row flex-center flex" method="POST" action="?/logout"> -->
    <div class="col-6 form-widget">
    <h1 class="header">Supabase + Svelte</h1>
    <input type="submit" class='button block' value={"Log Out"} disabled={$clientSession === null} on:click={()=> supabase.auth.signOut()}/>
    </div>
<!-- </form> -->