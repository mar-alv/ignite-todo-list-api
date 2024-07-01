import fs from 'node:fs/promises'

const databasePath = new URL('../db.json', import.meta.url)

export class Database {
	#database = {}

	constructor() {
		fs.readFile(databasePath, 'utf-8').then(data => {
			this.#database = JSON.parse(data)
		}).catch(() => {
			this.#persist()
		})
	}

	#persist() {
		fs.writeFile(databasePath, JSON.stringify(this.#database))
	}

	select(table, search) {
		let data = this.#database[table] ?? []

		if (!search)
			return data

		return data.filter(row => {
			return Object.entries(search).some(([key, value]) => {
				return row[key].toLowerCase().includes(value.toLowerCase())
			})
		})
	}

	insert(table, data) {
		if (Array.isArray(this.#database[table]))
			this.#database[table].push(data)
		else
			this.#database[table] = [data]

		this.#persist()

		return data
	}

	update(table, id, data) {
		const rowIndex = this.#database[table].findIndex(i =>
			i.id === id
		)

		if (rowIndex === -1)
			throw new Error('Task not found')

		this.#database[table][rowIndex] = {
			id,
			updatedAt: new Date().toISOString(),
			...data
		}
		this.#persist()

		return this.#database[table][rowIndex]
	}
}
