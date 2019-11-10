import client from './_helpers/contentful-client.js'

export async function get(req, res) {
	const entries = await client.getEntries({
		'content_type': 'post',
		'fields.categories.sys.id': 'category_4',
		order: '-sys.createdAt'
	})

	const contents = JSON.stringify(entries.items.map(post => {
		return {
			title: post.fields.title,
			slug: post.fields.wordpress_url.replace('https://www.itcanbeeasilydone.com/','').slice(0, -1)
		}
	}))

	res.writeHead(200, {
		'Content-Type': 'application/json'
	})
	res.end(contents)
}
