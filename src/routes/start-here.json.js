import client from '$lib/contentful-client.js'

export async function get() {
	const entries = await client.getEntries({
		'content_type': 'post',
		'fields.categories.sys.id': 'category_4',
		order: '-sys.createdAt'
	})

	return {
		body: entries.items.map(post => {
			return {
				title: post.fields.title,
				slug: post.fields.wordpress_url
			}
		})
	}
}
