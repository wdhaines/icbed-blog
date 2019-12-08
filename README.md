# icbed-blog

The “It Can Be Easily Done” blog based on [Sapper](https://github.com/sveltejs/sapper).

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
npm test
```

## Exporting the static version

```bash
npx sapper export
```
## Deploying to Zeit

```bash
now --prod -e SAPPER_TIMESTAMP=$(date +%s%3N)
```
