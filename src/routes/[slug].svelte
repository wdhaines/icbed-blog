<script context="module">
	export async function load({ fetch, params }) {
		const res = await fetch(`${params.slug}.json`)
		const data = await res.json()

		if (res.ok) {
			if (data.attachment) {
				return { 
					props: {
						post: data, 
						image: data.attachment.fields 
					}
				}
			} else {
				return { 
					props: {
						post: data, 
						image: null 
					}
				}
			}
		} else {
			return {
				status: res.status,
				error: new Error(data.message)
			}
		}
	}
</script>

<script>
	import { marked } from 'marked'
	export let post
	export let image
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
