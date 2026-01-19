export async function load({ fetch }) {
	const posts = await fetch('/start-here').then(r => r.json());
	return { posts };
}
