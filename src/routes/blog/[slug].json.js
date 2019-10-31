import client from '../_helpers/contentful-client.js'
const lookup = new Map()

export async function get(req, res, next) {
	const { slug } = req.params;

  const entries = await client.getEntries({
	  'content_type': 'post',
    'fields.wordpress_url': 'https://www.itcanbeeasilydone.com/' + slug + '/',
	  order: '-sys.createdAt'
	})

	const post = entries.items[0]
	const slugKey = post.fields.wordpress_url.replace('https://www.itcanbeeasilydone.com/','').slice(0, -1)
  lookup.set(slugKey, JSON.stringify(post.fields))

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
