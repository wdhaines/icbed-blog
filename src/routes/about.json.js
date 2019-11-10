import client from './_helpers/contentful-client.js'

export async function get(req, res, next) {
  const entries = await client.getEntries({
	  'content_type': 'page',
    'fields.wordpress_url': 'about',
	  order: '-sys.createdAt'
	})

	const page = entries.items[0]
	res.writeHead(200, {
		'Content-Type': 'application/json'
	})
	res.end(JSON.stringify(page.fields));
}
