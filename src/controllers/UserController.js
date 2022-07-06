
const User = require('../models/UserModel')
const { Op, json } = require('sequelize')
//para criptografar a senha
const bcrypt = require('bcrypt')


const UserController = {

    async buscarTodosUsuarios(req, res) {

        try {
            //findAll = trague todos
            let users = await User.findAll()

            res.status(200).json({
                message: "Usuarios buscados com sucesso",
                status: "S",
                users
            })

        } catch (error) {
            res.status(500).json({
                message: error.message,
                status: "E"
            })
        }
    },

    async criarUsuario(req, res) {
        try {

            let { nome, email, senha, nivel } = req.body
            //valida se todos os campos estao preenchidos
            if (nome == "" || email == "" || senha == "" || nivel == "") {
                res.status(400).json({
                    message: "Favor preencher todos os campos",
                    status: "E"
                })
                return
            }
            //verifica se ja existe usuario        //findOne encontra uma pessoa/obj em especifico
            const existeUsuario = await User.findOne({
                where: {
                    nome: {
                        [Op.eq]: nome.toLowerCase()
                    }
                }
            })

            if (existeUsuario) {
                res.status(400).json({
                    message: "Usuário existente",
                    status: "E"
                })
                return
            }

            //Criptografar a senha  //await é usado para processos que demoram pois o js é mt rapido
            //10 é o nivel de complexidade da incriptação
            const senhaCriptografada = await bcrypt.hash(senha, 10)

            //Criar o usuario

            let user = await User.create({
                nome: nome.toLowerCase(),
                email: email.toLowerCase(),
                senha: senhaCriptografada,
                nivel: nivel.toUpperCase()
            })
            //201 e o status de ciração do usuario(que eu bom)
            res.status(201).json({
                message: "Usuario criado com sucesso!",
                status: "S",
                user
            })

        } catch (error) {
            res.status(500).json({
                message: error.message,
                status: "E"
            })
        }
    },
    async buscarPeloId(req, res) {
        try {
            let idUrl = req.params.id
            let user = await User.findByPk(idUrl)

            if (user) {
                res.status(200).json({
                    message: 'Usuário encontrado com sucesso',
                    status: 'S',
                    user
                })
            } else {
                res.status(404).json({
                    message: 'Nenhum usuário encontrado',
                    status: 'E'
                })
            }


        }
        catch (error) {
            res.status(500).json({
                message: error.message,
                status: "E"
            })
        }
    },
    async atualizarUsuario(req, res) {

        try {

            let idUrl = req.params.id
            //aqui ja e criado 4 variaveis automaticamente com o valor respectivo
            let { nome, email, senha, nivel } = req.body

            if (nome == '' || email == "" || senha == "" || nivel == "") {
                res.status(400).json({
                    message: 'Favor preencher todos os campos',
                    status: "E"
                })
                return
            }

            let novosDados = {
                nome,
                email,
                senha: await bcrypt.hash(senha, 10),
                nivel
            }

            await User.update(novosDados, {
                where: {
                    id: idUrl
                }
            })

            res.status(200).json({
                message: 'Usuario atualizado com sucesso!',
                status: 'S',
                usuarioAtualizado: {
                    id: idUrl,
                    nome: novosDados.nome,
                    email: novosDados.email,
                    senha: novosDados.senha,
                    nivel: novosDados.nivel
                }
            })

        } catch (error) {
            res.status(500).json({
                message: error.message,
                status: "E"
            })
        }
    },
    async deletarUsuario(req, res) {
        try {

            let idUrl = req.params.id

            await User.destroy({
                //Onde o id for igual o ID da URL(só vai pegar onde o id for o id que for digitado)
                where: {
                    id: idUrl
                }
            })

            res.status(200).json({
                message: "Usuario deletado com sucesso",
                status: "S"
            })

        }
        catch (error) {
            res.status(500).json({
                message: error.message,
                status: "E"
            })
        }
    },
    async verificarLogin(req, res) {
        try {

            let { username, senha } = req.body

            if (username == '' || senha == '') {
                res.status(400).json({
                    message: "Favor preencher login e senha",
                    status: "E"
                })
            }

            let dbUser = await User.findOne({
                where: {
                    nome: {
                        //encontra um user name EQ(equal = igual)
                        [Op.eq]: username.toLowerCase()
                    }
                }
            })

            if (dbUser) {
                const verify = await bcrypt.compare(senha, dbUser.senha)



                if (verify == true) {
                    res.status(200).json({
                        message: "Usuário autenticado com sucesso!",
                        status: "S",
                        username: dbUser.nome
                    })
                } else {
                    res.status(400).json({
                        message: "Username / senha inválidos",
                        status: "E"
                    })
                }
            }

            else{
                res.status(400).json({
                    message: "Username / senha inválidos",
                    status: "E"
            }
            )}

            

        } catch (error) {
            res.status(500), json({
                message: error.message,
                status: 'E'
            })
        }

    }
}

module.exports = UserController


