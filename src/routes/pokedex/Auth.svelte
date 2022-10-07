<script lang="ts">
    import { clientSession } from "$lib/stores/sessionStore";

	let email : string = "";
</script>

<form class="row flex-center flex" method="POST" action="?/login">
    <div class="col-6 form-widget">
    <h1 class="header">Supabase + Svelte</h1>
    <p class="description">Sign in via magic link with your email below</p>
    <div>
        <input
            name="email"
            class="inputField"
            type="email"
            placeholder="Your email"
            bind:value="{email}"
        />
    </div>
    <div>
        <input type="submit" class='button block' value={$clientSession ? "Loading" : "Send magic link"} disabled={$clientSession !== null} />
    </div>
    </div>
</form>

<style>
	.inputField {
		width: 100%;
		padding: 12px 20px;
		margin: 8px 0;
		display: inline-block;
		border: 1px solid #ccc;
		border-radius: 4px;
		box-sizing: border-box;
		color : black;
	}
</style>