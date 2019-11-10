<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`start-here.json`).then(r => r.json()).then(posts => {
			return { posts }
		});
	}
</script>

<script>
	export let posts
</script>

<svelte:head>
	<title>Start Here</title>
</svelte:head>

<h1>Start Here</h1>

<p>If you’re looking for my advice on how to break down your goals into actionable steps, stay motivated, and get them done, these are my absolute best posts. So get started here!</p>

<ul>
	{#each posts as post}
		<!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
		<li><a rel='prefetch' href='{post.slug}'>{post.title}</a></li>
	{/each}
</ul>
