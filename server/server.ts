import express, { Request, Response, Application } from 'express'

const cors = require('cors')
const server: Application = express()
const port = 5000

server.use(
    cors({
        origin: '*',
    })
)
server.use(express.json())

const todos = [
    {
        createdAt: '2022-02-18T20:32:05.597Z',
        title: 'title 4',
        description: 'description 4',
        updatedAt: '2021-04-24T11:15:19.030Z',
        id: 1,
    },
    {
        createdAt: '2022-02-19T06:09:14.903Z',
        title: 'title 5',
        description: 'description 5',
        updatedAt: '2021-12-27T13:40:29.993Z',
        id: 5,
    },
    {
        createdAt: '2022-02-18T18:20:25.533Z',
        title: 'title 6',
        description: 'description 6',
        updatedAt: '2021-12-16T10:08:05.312Z',
        id: 6,
    },
]

server.get('/', (req, res) => {
    res.send('Worked')
})

server.get('/todos', (req, res) => {
    res.json(todos)
})

server.post('/todos', (req, res) => {
    const maxId = todos.sort((a, b) => b.id - a.id)[0].id
    const date = new Date().toISOString()
    const todo = {
        title: '',
        description: '',
        id: maxId + 1,
        createdAt: date,
        updatedAt: date,
    }
    todos.push(todo)
    res.json(todos)
})

server.put('/todos/:id', (req, res) => {
    const index = todos.findIndex((todo) => todo.id === req.body.id)
    if (index !== -1) {
        todos[index] = req.body
        todos[index].updatedAt = new Date().toISOString()
        res.json(todos)
    } else {
        res.status(403).send('The ID not found')
    }
})

server.delete('/todos/:id', (req, res) => {
    console.log(req.params.id)
    const index = todos.findIndex((todo) => todo.id === Number(req.params.id))
    if (index !== -1) {
        todos.splice(index, 1)
        res.json(todos)
    } else {
        res.status(403).send('The ID not found')
    }
})

server.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

module.exports = server
