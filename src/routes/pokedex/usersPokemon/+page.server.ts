import type { RequestEvent, Actions } from '@sveltejs/kit';
import { supabase } from '$lib/clients/supabaseClient';
import { chosenPokemon } from '$lib/stores/pokedexStore';
import { get } from 'svelte/store';
import { error as svelteError } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load : PageServerLoad = async () => {
    const { data, error } = await supabase.from('pokemon').select();
    
    if (data) {
        chosenPokemon.set(JSON.parse(JSON.stringify(data)));
        return;
    }
    
    throw svelteError(parseInt(error.code), error.message);
}

export const actions : Actions = {    
	registerPokemon: async (event : RequestEvent) => {
        let success = false;
        let returnedError : string | undefined;
        let successResponse : string | undefined;
        try {
            console.log(event);
            let data = await event.request.formData();
            console.log(data);
            let pokemonId = parseInt(data.get('pokemonId') as string);
            console.log(pokemonId);
            let pokemonData = JSON.stringify(get(chosenPokemon).find(pokemon => pokemon.id == pokemonId));
            console.log(get(chosenPokemon));

            // Can be seen in the debug console, but not in the client
            console.log(pokemonData);

            const updates = {
                id: pokemonId,
                pokemonData: pokemonData,
                updated_at: new Date(),
            };
      
            let { error } = await supabase.from('pokemon').upsert(updates);
      
            if (error) {
                console.log(error);
                success = false;
                returnedError = error.message;
                throw svelteError(parseInt(error.code), error.message);
            } else {
                successResponse = 'Pokemon registered!';
                success = true;
            }
        } catch (error: any) {
            console.log(error);
            success = false;
            returnedError = error.message;
            throw svelteError(parseInt(error.code), error.message);
        } finally {
            return { success: success, returnedError };
        }
	},
    removePokemon: async (event : RequestEvent) => {
        try {            
            let data = await event.request.formData();
            let pokemonId = parseInt(data.get('pokemonId') as string);
      
            let { error } = await supabase.from('pokemon').delete().eq('id', pokemonId);
      
            if (error) {
                throw svelteError(parseInt(error.code), error.message);
            } else {
                chosenPokemon.update(pokemon => pokemon.filter(pokemon => pokemon.id !== pokemonId));
            }
        } catch (error: any) {
            throw svelteError(parseInt(error.code), error.message);
        }
	}

};