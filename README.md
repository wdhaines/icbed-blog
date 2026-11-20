# icbed-blog

The “It Can Be Easily Done” blog built with [SvelteKit](https://svelte.dev/docs/kit) and deployed on Vercel.

## Installing the project

```bash
cd icbed-blog
npm install
```
## Running the project

```bash
npm run dev
```

## Running tests

```bash
npx playwright install chromium   # first time only
npm test
```

The tests are [Playwright](https://playwright.dev) end-to-end tests in `e2e/`; `npm test` starts the dev server for you. The `/about` and `/start-here` checks need the Contentful environment variables (`VITE_CTF_SPACE_ID`, `VITE_CDA_ACCESS_TOKEN`).