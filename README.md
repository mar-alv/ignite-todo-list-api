<h1 align='center'> 🚧 Ignite ToDo List API in progress... 🚧 </h1>

<div align='center'>

  ![project-img](./.github/cover.jpg)
  
  [![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)

  [🇬🇧 English](#en) / [🇧🇷 Português](#pt-br)

</div>

## <a id='en' style='text-decoration: none; color: inherit;'>🇬🇧 English</a>

### 📚 Summary
- [❕ About](#en-about)
- [📖 Instructions](#en-instructions)
  - [📥 Install](#en-install)
  - [🚀 Run Locally](#en-locally)
- [⚡ Endpoints](#en-endpoints)
- [📂 Structure](#en-structure)

#### <a id='en-about' style='text-decoration: none; color: inherit;'>❕ About</a>
This is my implementation of the challenge project "ToDo List API" from the first Node.js module of [Ignite](https://www.rocketseat.com.br/ignite), an intermediate and advanced course in various programming languages and technologies offered by [Rocketseat](https://www.rocketseat.com.br/).

#### <a id='en-instructions' style='text-decoration: none; color: inherit;'>📖 Instructions</a>
##### <a id='en-instalar' style='text-decoration: none; color: inherit;'>📥 Install</a>
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

##### <a id='en-locally' style='text-decoration: none; color: inherit;'>🚀 Run Locally</a>
Paste the command into a terminal, the server will be accessable through the port 3001
```sh
npm run dev
```

#### <a id='en-endpoints' style='text-decoration: none; color: inherit;'>⚡ Endpoints</a>
In order to make requests to the server with 🥧 HTTPie directly from the terminal, you would have to follow its CLI [installation guide](https://httpie.io/docs/cli/main-features)
##### Create a task
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

# Missing either the title or description in the request body

HTTP/1.1 400 Bad Request
Content-type: application/json

"Title and description are obligatory"
```

##### List tasks
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

##### Update a task
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

#### <a id='en-structure' style='text-decoration: none; color: inherit;'>📂 Structure</a>
```
│ httpie/
│   └── ... files to easily test the endpoints from the terminal
│ src/
│   ├── middlewares/
│   │     └── ... functions to intercept and modify the requests and responses
│   ├── utils/
│   │     └── ... utils functions to deal with route and query params
│   └── ...
```

## <a id='pt-br' style='text-decoration: none; color: inherit;'>🇧🇷 Português</a>

### 📚 Sumário
- [❕ Sobre](#pt-br-sobre)
- [📖 Instruções](#pt-br-instrucoes)
  - [📥 Instalar](#pt-br-instalar)
  - [🚀 Rodar Localmente](#pt-br-localmente)
- [⚡ Endpoints](#pt-br-endpoints)
- [📂 Estrutura](#pt-br-estrutura)

#### <a id='pt-br-sobre' style='text-decoration: none; color: inherit;'>❕ Sobre</a>
Esta é a minha implementação do desafio "ToDo List API" do primeiro módulo de Node.js do [Ignite](https://www.rocketseat.com.br/ignite), um curso intermediário e avançado de diversas linguagens de programação e tecnologias oferecido pela [Rocketseat](https://www.rocketseat.com.br/).

#### <a id='pt-br-instrucoes' style='text-decoration: none; color: inherit;'>📖 Instruções</a>
##### <a id='pt-br-instalar' style='text-decoration: none; color: inherit;'>📥 Instalar</a>
Cole o 1º comando em um terminal aberto dentro de uma pasta de sua preferência para clonar o projeto
```sh
git clone https://github.com/mar-alv/ignite-todo-list-api.git
```
Em seguida rode uma das versões do 2º comando para instalar as dependências
```sh
npm i
```
```sh
npm install
```

##### <a id='pt-br-localmente' style='text-decoration: none; color: inherit;'>🚀 Rodar Localmente</a>
Cole o comando em um terminal, o servidor estará acessível pela porta 3001 
```sh
npm run dev
```

##### <a id='pt-br-endpoints' style='text-decoration: none; color: inherit;'>⚡ Endpoints</a>
Para fazer requisições ao servidor com 🥧 HTTPie diretamente do terminal, é necessário seguir o [guia de instalação](https://httpie.io/docs/cli/main-features) da CLI
##### Criar uma tarefa
Cria uma nova tarefa com título e descrição informados
```sh
curl -X POST http://localhost:3001/tasks -h "Content-Type: application/json" -d '{"title":"Título da tarefa", "description":"Descrição da tarefa"}'
```

Com 🥧 HTTPie
```sh
http POST http://localhost:3001/tasks < httpie/create.json
```
Respostas
```
# Ao criar uma nova tarefa com sucesso

HTTP/1.1 201 Created
Connection: keep-alive
Content-type: application/json

"Task created"

# Ao esquecer o título ou descrição no corpo da requisição

HTTP/1.1 400 Bad Request
Content-type: application/json

"Title and description are obligatory"
```

##### Listar tarefas
Lista todas as tarefas criadas, opcionalmente você pode passar um valor para filtrar por tarefas específicas, baseado no título ou descrição delas
```sh
curl -X GET 'http://localhost:3001/tasks' -h "Content-Type: application/json"
```
```sh
curl -X GET 'http://localhost:3001/tasks?search=título' -h "Content-Type: application/json"
```

Com 🥧 HTTPie
```sh
http GET http://localhost:3001/tasks
```
```sh
http GET http://localhost:3001/tasks?search=título
```

Respostas
```
# Tendo tarefas criadas
HTTP/1.1 200 OK
Connection: keep-alive
Content-type: application/json

[
  {
   "completedAt": null,
   "createdAt": "2024-06-30T22:47:22.258Z",
   "description": "Descrição da tarefa",
   "id": "88e75cc5-605f-49e9-a295-89a027136ab0",
    "title": "Título da tarefa",
    "updatedAt": "2024-06-30T22:47:22.258Z"
  }
]

# Não tendo tarefas criadas ou não batendo com o filtro informado

HTTP/1.1 200 OK
Connection: keep-alive
Content-type: application/json

[]
```

##### Atualizar uma tarefa
Atualiza o título e/ou descrição de uma tarefa já existente atráves do seu id, a data de última modificação é atualizada junta automaticamente
```sh
curl -X PUT http://localhost:3001/tasks/e13c1414-476f-4c7d-b8ca-44a4279bd538 -h "Content-Type: application/json" -d '{"title":"Novo título da tarefa", "description":"Nova descrição da tarefa"}'
```

Com 🥧 HTTPie
```sh
http PUT http://localhost:3001/tasks/e13c1414-476f-4c7d-b8ca-44a4279bd538 < httpie/update.json
```

Respostas
```
# Ao atualizar a tarefa com sucesso

HTTP/1.1 204 No Content
Connection: keep-alive
Content-type: application/json

# Ao enviar um corpo de requisição inválido

HTTP/1.1 400 Bad Request
Connection: keep-alive
Content-type: application/json

"Title or description obligatory"

# Ao não encontrar a tarefa pelo seu id

HTTP/1.1 404 Not Found
Connection: keep-alive
Content-type: application/json

"Task not found"
```

#### <a id='pt-br-estrutura' style='text-decoration: none; color: inherit;'>📂 Estrutura</a>
```
│ httpie/
│   └── ... arquivos para facilmente testar os endpoints pelo terminal
│ src/
│   ├── middlewares/
│   │     └── ... funções para interceptar e modificar as requisições e respostas
│   ├── utils/
│   │     └── ... funções utilitárias para lidar com parâmetros de rota e consulta
│   └── ...
```

## 🧰 Technologies
### Build Tools
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)

### Testing
[![HTTPie](https://img.shields.io/badge/HTTPie-000?style=for-the-badge&logo=httpie&logoColor=white)](https://httpie.io/)


## Author
<div style='display: flex; align-items: center;'>
    <img src='https://github.com/mar-alv.png' alt='Marcelo Alvarez GitHub profile picture' style='width: 150px; border-radius: 50%; margin-right: 20px;'>
    <div>
        <strong>Marcelo Alvarez</strong>
        <br>
        <em>Front-end Developer</em><br>
        <span>"Some AI generated funny quote here 😗"</span><br>
        <a href='https://www.linkedin.com/in/marcelo-dos-santos-alvarez-474406180/'>LinkedIn</a>
    </div>
</div>

## License
Licensed under [MIT](./LICENSE)
