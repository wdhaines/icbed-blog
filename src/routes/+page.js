export async function load({ fetch }) {
	const posts = await fetch('/').then(r => r.json());
	return { posts };
}
