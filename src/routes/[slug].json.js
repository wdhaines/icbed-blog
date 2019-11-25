import client from 'contentful-client.js'
const lookup = new Map()

export async function get(req, res, next) {
	const { slug } = req.params;

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
	const fields = entries.items[0].fields

  lookup.set(fields.wordpress_url, JSON.stringify(fields))

	if (lookup.has(slug)) {
		res.writeHead(200, {
			'Content-Type': 'application/json'
		})

		res.end(lookup.get(slug));
	} else {
		res.writeHead(404, {
			'Content-Type': 'application/json'
		})

		res.end(JSON.stringify({
			message: `Not found`
		}))
	}
}
