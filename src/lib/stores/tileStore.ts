import { writable } from "svelte/store";

export const tileStore = writable<HTMLElement[]>([]);
