import { createClient } from '@supabase/supabase-js';
import { env } from '$lib/env'

const supabaseUrl = env.SupaBaseUrl as string;
const supabaseAnonKey = env.SupaBaseAuthKey as string;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);