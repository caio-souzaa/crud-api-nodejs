const routes = require('express').Router()
const UserController = require('../controllers/UserController')


routes.get('/users', UserController.buscarTodosUsuarios)
//Buscar user pelo ID
routes.get('/users/:id', UserController.buscarPeloId)

//Criar Usuario
routes.post('/users' , UserController.criarUsuario)

//Atualizar Usuario

routes.put('/users/:id', UserController.atualizarUsuario)

//Deletar Usuário

routes.delete('/users/:id', UserController.deletarUsuario)

//Verificar login

routes.post('/verificarlogin', UserController.verificarLogin)

module.exports = routes