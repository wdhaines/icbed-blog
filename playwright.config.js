import { defineConfig } from '@playwright/test';

const PORT = 5173;

export default defineConfig({
	testDir: 'e2e',
	reporter: 'list',
	use: {
		baseURL: `http://localhost:${PORT}`,
		trace: 'off'
	},
	webServer: {
		command: `npm run dev -- --port ${PORT} --strictPort`,
		url: `http://localhost:${PORT}/contact`,
		reuseExistingServer: !process.env.CI
	}
});
