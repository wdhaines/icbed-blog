import { json } from '@sveltejs/kit';
import client from '$lib/contentful-client.js';

export async function GET() {
	const entries = await client.getEntries({
		'content_type': 'post',
		'fields.categories.sys.id': 'category_4',
		order: '-sys.createdAt'
	});

	return json(entries.items.map(post => {
		return {
			title: post.fields.title,
			slug: post.fields.wordpress_url
		};
	}));
}
