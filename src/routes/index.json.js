import client from '$lib/contentful-client.js'

export async function get() {
	const entries = await client.getEntries({
		'content_type': 'post',
		order: '-fields.created_at'
	})

	return {
		body: entries.items.map(post => {
			return {
				title: post.fields.title,
				slug: post.fields.wordpress_url
			}
		})
	};
}
