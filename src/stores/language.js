import { writable } from 'svelte/store';

const language = writable({
    language: 'en'
});

export default language;