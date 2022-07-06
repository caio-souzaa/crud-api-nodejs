const express = require('express')
const routes = require('./routes')
const server = express()
const db = require('./database')

server.use(express.json())
server.use('/api', routes)
db.sync()
.then(() => console.log('Banco conectado com sucesso'))

server.listen(3333, () => {
    console.log("Servidor rodando http://localhost:3333")
})