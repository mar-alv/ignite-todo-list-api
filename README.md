<h1 align='center'> Ignite ToDo List API </h1>

<div align='center'>

  ![project-img](./.github/cover.jpg)
  
  [![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)

  [🇵🇹 Português](./docs/README-pt.md)

</div>

## 📚 Summary
- [❕ About](#about)
- [📖 Instructions](#instructions)
  - [📥 Install](#install)
  - [🚀 Run Locally](#locally)
- [⚡ Endpoints](#endpoints)
- [📂 Structure](#structure)
- [🧰 Technologies](#technologies)
- [📸 Screenshots and 🎥 Recordings](#screenshots-prints)
- [👤 Author](#author)
- [📄 License](#license)

### <a id='about' style='text-decoration: none; color: inherit;'>❕ About</a>
This is my implementation of the challenge project "ToDo List API" from the first Node.js module of [Ignite](https://www.rocketseat.com.br/ignite), an intermediate and advanced course in various programming languages and technologies offered by [Rocketseat](https://www.rocketseat.com.br/).

### <a id='instructions' style='text-decoration: none; color: inherit;'>📖 Instructions</a>
#### <a id='instalar' style='text-decoration: none; color: inherit;'>📥 Install</a>
Paste the 1º command into a terminal open within a folder of your preference to clone the project
```sh
git clone https://github.com/mar-alv/ignite-todo-list-api.git
```

Then run one of the versions of the 2º command to install the dependencies
```sh
npm i
```
```sh
npm install
```

#### <a id='locally' style='text-decoration: none; color: inherit;'>🚀 Run Locally</a>
Paste the command into a terminal, the server will be accessable through the port 3001
```sh
npm run dev
```

### <a id='endpoints' style='text-decoration: none; color: inherit;'>⚡ Endpoints</a>
In order to make requests to the server with 🥧 HTTPie directly from the terminal, you would have to follow its CLI [installation guide](https://httpie.io/docs/cli/main-features)
#### Create a task
Creates a new task with the given title and description
```sh
curl -X POST http://localhost:3001/tasks -h "Content-Type: application/json" -d '{"title":"Task title", "description":"Task description"}'
```

With 🥧 HTTPie
```sh
http POST http://localhost:3001/tasks < httpie/create.json
```
Responses
```
# When successfully creating a new task

HTTP/1.1 201 Created
Connection: keep-alive
Content-type: application/json

"Task created"

# When not providing a valid request body

HTTP/1.1 400 Bad Request
Content-type: application/json

"Title and description are obligatory"
```

#### List tasks
Lists all tasks created, you may optionally pass a value to filter for specific tasks, based on their title or description
```sh
curl -X GET 'http://localhost:3001/tasks' -h "Content-Type: application/json"
```
```sh
curl -X GET 'http://localhost:3001/tasks?search=title' -h "Content-Type: application/json"
```

With 🥧 HTTPie
```sh
http GET http://localhost:3001/tasks
```
```sh
http GET http://localhost:3001/tasks?search=title
```
Responses
```
# Having created a task
HTTP/1.1 200 OK
Connection: keep-alive
Content-type: application/json

[
  {
   "completedAt": null,
   "createdAt": "2024-06-30T22:47:22.258Z",
   "description": "task description",
   "id": "88e75cc5-605f-49e9-a295-89a027136ab0",
    "title": "task title",
    "updatedAt": "2024-06-30T22:47:22.258Z"
  }
]

# Not having created a task or none matching the given filter

HTTP/1.1 200 OK
Connection: keep-alive
Content-type: application/json

[]
```

#### Update a task
Updates the title and/or description of an existing task through its id, the updatedAt date is automatically updated
```sh
curl -X PUT http://localhost:3001/tasks/e13c1414-476f-4c7d-b8ca-44a4279bd538 -h "Content-Type: application/json" -d '{"title":"New task title", "description":"New task description"}'
```

With 🥧 HTTPie
```sh
http PUT http://localhost:3001/tasks/e13c1414-476f-4c7d-b8ca-44a4279bd538 < httpie/update.json
```

Responses
```
# When successfully updating a task

HTTP/1.1 204 No Content
Connection: keep-alive
Content-type: application/json

# When not providing a valid request body

HTTP/1.1 400 Bad Request
Connection: keep-alive
Content-type: application/json

"Title or description obligatory"

# When not finding the task by its id

HTTP/1.1 404 Not Found
Connection: keep-alive
Content-type: application/json

"Task not found"
```

#### Delete a task
Deletes an existing task through its id
```sh
curl -X DELETE http://localhost:3001/tasks/e13c1414-476f-4c7d-b8ca-44a4279bd538 -h "Content-Type: application/json"
```

With 🥧 HTTPie
```sh
http DELETE http://localhost:3001/tasks/e13c1414-476f-4c7d-b8ca-44a4279bd538
```

Responses
```
# When successfully deleting a task

HTTP/1.1 204 No Content
Connection: keep-alive
Content-type: application/json

# When not finding the task by its id

HTTP/1.1 404 Not Found
Connection: keep-alive
Content-type: application/json

"Task not found"
```

#### Close/Reopen a task
Closes or reopens an existing task through its id
```sh
curl -X PATCH http://localhost:3001/tasks/e13c1414-476f-4c7d-b8ca-44a4279bd538/complete -h "Content-Type: application/json"
```

With 🥧 HTTPie
```sh
http PATCH http://localhost:3001/tasks/e13c1414-476f-4c7d-b8ca-44a4279bd538/complete
```

Responses
```
# When successfully closing/reopening a task

HTTP/1.1 204 No Content
Connection: keep-alive
Content-type: application/json

# When not finding the task by its id

HTTP/1.1 404 Not Found
Connection: keep-alive
Content-type: application/json

"Task not found"
```

#### Non existing route
When trying to access a route that doesn't exists in the server

Response
```
HTTP/1.1 404 Not Found
Connection: keep-alive
Content-type: application/json

"Route not found"
```

### <a id='structure' style='text-decoration: none; color: inherit;'>📂 Structure</a>
```
│ docs/
│   └── ...
│ httpie/
│   └── ...
│ src/
│   ├── middlewares/
│   │     └── ...
│   ├── utils/
│   │     └── ...
│   └── ...
```

### <a id='technologies' style='text-decoration: none; color: inherit;'>🧰 Technologies</a>
#### Build Tools
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)

#### Testing
[![HTTPie](https://img.shields.io/badge/HTTPie-000?style=for-the-badge&logo=httpie&logoColor=white)](https://httpie.io/)

### <a id='author' style='text-decoration: none; color: inherit;'>👤 Author</a>
<div style='display: flex; align-items: center;'>
		<img src='https://github.com/mar-alv.png' alt='Marcelo Alvarez GitHub profile picture' style='width: 150px; border-radius: 50%; margin-right: 20px;'>
		<div>
				<strong>Marcelo Alvarez</strong>
				<br>
				<em>Front-end Developer</em><br>
				<span>"Some AI generated funny quote here 😗"</span><br>
				<a href='https://www.linkedin.com/in/mar-alv'>
					<img
						alt='LinkedIn'
						src='https://img.shields.io/badge/LinkedIn-Marcelo%20Alvarez-0077B5?logo=linkedin&logoColor=white'
					/>
				</a>
				<a href='https://mar-alv.github.io/'>
					<img
						alt='Portfolio'
						src='https://img.shields.io/badge/Portfolio-Marcelo%20Alvarez-000?style=flat&logo=portfolio&logoColor=white'
					/>
				</a>
		</div>
</div>

### <a id='license' style='text-decoration: none; color: inherit;'>📄 License</a>
Licensed under [MIT](./LICENSE)
