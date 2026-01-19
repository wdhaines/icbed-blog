import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { imagetools } from 'vite-imagetools';
import * as path from 'path';

const API_BASE = process.env.DOCS_PREVIEW ? 'http://localhost:3456' : 'https://api.svelte.dev';

export default defineConfig({
	plugins: [sveltekit(), imagetools()],
	define: {
		'process.env.API_BASE': JSON.stringify(API_BASE)
	},
	resolve: {
		alias: {
			$img: path.resolve('src/images'),
			'@sveltejs/site-kit': path.resolve('../../packages/site-kit/src/lib')
		}
	},
	server: {
		fs: {
			strict: false
		}
	}
});
