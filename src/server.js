import http from 'node:http'

import { extractQueryParams } from './utils/extract-query-params.js'
import { json } from './middlewares/json.js'
import { routes } from './routes.js'

const server = http.createServer(async (req, res) => {
	const { method, url } = req

	await json(req, res)
 
	const route = routes.find(i =>
		i.method === method && i.path.test(url)
	)

	if (!route) {
		return res.writeHead(404).end('route not found')
	}

	const routeParams = url.match(route.path)

	const { query, ...params } = routeParams.groups

	req.params = params
	req.query = query ? extractQueryParams(query) : {}

	return route.handler(req, res)
})

server.listen(3001, () => {
	console.log('🔥 server running on port 3001')
})
