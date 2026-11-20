import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { imagetools } from 'vite-imagetools';
import vercel from '@sveltejs/adapter-vercel';

export default defineConfig({
	plugins: [sveltekit({ adapter: vercel() }), imagetools()]
});
