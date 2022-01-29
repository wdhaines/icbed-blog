import client from '$lib/contentful-client.js'
const lookup = new Map()

export async function get({params}) {
	const { slug } = params;

	let entries = await client.getEntries({
		'content_type': 'post',
		'fields.wordpress_url': slug,
		order: '-sys.createdAt'
		})
	if (entries.items.length == 0) {
		entries = await client.getEntries({
			'content_type': 'page',
			'fields.wordpress_url': slug,
			order: '-sys.createdAt'
		})
	}

	if (entries.items[0]) {
		const fields = entries.items[0].fields
		lookup.set(fields.wordpress_url, fields)
	} 

	if (lookup.has(slug)) {
		return {
			body: lookup.get(slug) 
		}
	} else {
		return {
			status: 404,
			error: new Error(`Not found`)
		}
	}
}
