<script>
	export let data;
	$: posts = data.posts;
</script>

<svelte:head>
	<title>Start Here</title>
</svelte:head>

<h1>Start Here</h1>

<p>If you’re looking for my advice on how to break down your goals into actionable steps, stay motivated, and get them done, these are my absolute best posts. So get started here!</p>

<ul>
	{#each posts as post}
		<li><a rel='prefetch' href='{post.slug}'>{post.title}</a></li>
	{/each}
</ul>
