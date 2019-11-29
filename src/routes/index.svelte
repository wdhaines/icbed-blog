<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`index.json`).then(r => r.json()).then(posts => {
			return { posts }
		})
	}
</script>

<script>
	export let posts
</script>

<svelte:head>
	<title>It Can Be Easily Done | How to do the “right” thing… easily.</title>
	<meta name="description" content="Actionable advice about how to do the “right” thing… better and with less stress.">
</svelte:head>

<h2>Actionable advice about how to do the “right” thing… better and with less stress.</h2>

<p>Welcome to the place to find out how to turn the things you “should” be doing into the things you did. My mission is to help you build the systems that turn big, scary, seemingly impossible dreams into steps you can actually do.</p>

<ul>
	{#each posts as post}
		<li><a rel='prefetch' href='{post.slug}'>{post.title}</a></li>
	{/each}
</ul>
