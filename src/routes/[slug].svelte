<script context="module">
	export async function preload({ params, query }) {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		const res = await this.fetch(`${params.slug}.json`)
		const data = await res.json()

		if (res.status === 200) {
			return { post: data }
		} else {
			this.error(res.status, data.message)
		}
	}
</script>

<script>
	export let post
	export let image
	if (post.attachment) {
		image = post.attachment.fields
	}
	import marked from 'marked'
</script>

<style>
	img {
		max-width: 100%;
		height: auto;
		margin-bottom: 20px;
	}
</style>

<svelte:head>
	<title>{post.meta_title} | It Can Be Easily Done</title>
	<meta name="description" content="{post.meta_description}" />
</svelte:head>

{#if image}
	<img src="{image.file.url}" alt="{image.description}" width="1200" height="385">
{/if}

<h1>{post.title}</h1>

<div class='content'>
	{@html marked(post.content)}
</div>
