import type { RequestEvent } from '@sveltejs/kit';
import { supabase } from '$lib/clients/supabaseClient';

/** @type {import('./$types').Actions} */
export const actions = {
    login: async (event: RequestEvent) => {
        try {
            const loginInfo = await event.request.formData();
            const email = loginInfo.get('email') as string;
            const { error } = await supabase.auth.signIn({ email })
            
            if (error) 
                throw error;
                
            alert('Check your email for the login link!');
        } catch (error: any) {
            alert(error.error_description || error.message);
        } finally {
            return { success: true };
        }
    },
	registerPokemon: async (event : RequestEvent) => {
        try {
            const user = supabase.auth.user();
            if (!user) 
                throw new Error('You must be logged in to register a pokemon');
            let data = await event.request.formData();
            let pokemonId = data.get('pokemonId') as string;
            let pokemonData = data.get('pokemonData') as string;
            console.log(pokemonData);
            const updates = {
                id: pokemonId,
                pokemonData: pokemonData,
                updated_at: new Date(),
            };
      
            let { error } = await supabase.from('pokemon').upsert(updates, {
              returning: 'minimal', // Don't return the value after inserting
            });
      
            if (error) 
                throw error;
        } catch (error: any) {
            throw error;
        } finally {
            return { success: true };
        }
	}
};