import { randomUUID } from 'node:crypto'

import { buildRoutePath } from './utils/build-route-path.js'
import { Database } from './database.js'

const database = new Database()

export const routes = [
	{
		method: 'GET',
		path: buildRoutePath('/tasks'),
		handler: (req, res) => {
			const { search } = req.query

			const tasks = database.select('tasks', search ? {
				title: search,
				description: search
			} : null)

			return res.end(JSON.stringify(tasks))
		}
	},
	{
		method: 'POST',
		path: buildRoutePath('/tasks'),
		handler: (req, res) => {
			const { title, description } = req.body

			if (!title || !description)
				return res.writeHead(400).end('title and description are obligatory')

			var creationDate = new Date().toISOString()

			database.insert('tasks', {
				id: randomUUID(),
				title,
				description,
				completedAt: null,
				createdAt: creationDate,
				updatedAt: creationDate
			})

			return res.writeHead(201).end('task created')
		}
	}
]
