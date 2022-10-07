import type { RequestEvent, Actions } from '@sveltejs/kit';
import { supabase } from '$lib/clients/supabaseClient';
import { clientSession } from "$lib/stores/sessionStore";
import { error as svelteError } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load : PageServerLoad = async ({ fetch }) => {
    console.log("We did a load");

    const quoteRes = await fetch('https://dummyjson.com/quotes/random');
    const quoteData = await quoteRes.json();
    const quote = quoteData.quote as string;
    const author = quoteData.author as string;
    return {
        quote : quote,
        author : author
    }
    // await supabase.auth.getSession();
    // supabase.auth
    // .getSession()
    // .then(({ data }) => {
    //     console.log("Data from load action: " + data);
    //     clientSession.set(data.session);
    // });
}

export const actions : Actions = {
    login: async (event: RequestEvent) => {
        try {
            const loginInfo = await event.request.formData();
            const email = loginInfo.get('email') as string;

            // Can be seen in the debug console, but not in the client
            console.log(email);

            const { error } = await supabase.auth.signInWithOtp({ email })
            
            // const { data, error } = await supabase.auth.signInWithOAuth({
            //     provider: 'github',
            // });
            // console.log(data);
            
            if (error){
                console.log(error);
                throw svelteError(400, error.message);
            };
        } catch (error: any) {
            console.log(error);
            throw svelteError(parseInt(error.code), error.message);
        }
    },

    logout: async () => {
        try {
            const { error } = await supabase.auth.signOut();
            console.log(error);
            if (error)
                throw svelteError(400, error.message);

        } catch (error: any) {
            throw svelteError(parseInt(error.code), error.message);
        }
    },
}