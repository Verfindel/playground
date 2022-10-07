import { writable } from 'svelte/store';
import type { AuthSession } from '@supabase/supabase-js';

export const clientSession = writable<AuthSession | null>(null);