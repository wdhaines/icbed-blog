import { error } from '@sveltejs/kit';

export async function load({ fetch, params }) {
	const res = await fetch(`/${params.slug}`);

	if (res.ok) {
		const data = await res.json();

		return {
			post: data,
			image: data.attachment?.fields || null
		};
	}

	throw error(res.status, await res.text());
}
