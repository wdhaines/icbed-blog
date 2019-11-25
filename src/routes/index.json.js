import client from 'contentful-client.js'

export async function get(req, res) {
	const entries = await client.getEntries({
		'content_type': 'post',
		order: '-fields.created_at'
	})

	const contents = JSON.stringify(entries.items.map(post => {
		return {
			title: post.fields.title,
			slug: post.fields.wordpress_url
		}
	}))

	res.writeHead(200, {
		'Content-Type': 'application/json'
	})
	res.end(contents)
}
