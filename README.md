### Api para uso de aulas

PARA INICIAR O SERVIDOR `npm start`

Utilizado Banco SQLITE, se encontra dentro de src/database/db.sqlite (precisa iniciar o projeto para criar o banco);

---

Buscar todos os usuarios GET: `http://localhost:3333/api/users`

`Resposta:`

```json
{
    "message": "Usuarios buscados com sucesso",
    "status": "S",
    "users": [
        {
            "id": 1,
            "nome": "johnny",
            "email": "meuemail@gmail.com",
            "senha": "$2b$10$5hKD5APlay0my1Dc1wIG3OKoaBGmggpJb0pWq6K.zWBtnqEOkRhx2",
            "nivel": "ADMIN"
        }
    ]
}
```
---
<br> 
<br> 
<br> 
<br> 
<br> 
<br> 
<br> 


---
Buscar um usuario GET: `http://localhost:3333/api/users/1`

Resposta caso encontrar o usuario:

```json
{
    "message": "Usuario encontrado com sucesso",
    "status": "S",
    "user": {
        "id": 1,
        "nome": "johnny",
        "email": "jbseubert@gmail.com",
        "senha": "$2b$10$5hKD5APlay0my1Dc1wIG3OKoaBGmggpJb0pWq6K.zWBtnqEOkRhx2",
        "nivel": "ADMIN"
    }
}
```

Resposta se não encontrar nenhum usuário:

```js
{
    "message": "Nenhum usuário encontrado",
    "status": "N"
}
```
---
<br> 
<br> 
<br> 
<br> 
<br> 
<br> 
<br> 


---
Criar um usuario POST: `http://localhost:3333/api/users`

`Modelo dedados a ser enviado`
```json
{
  "nome": "",
  "email": "",
  "senha": "",
  "nivel": ""
}
```

`Vai retornar o seguinte json se todos os campos foram preenchidos:`

```js
{
    "message": "Usuario criado com sucesso",
    "status": "S",
    "user": {
        "id": 1,
        "nome": "johnny",
        "email": "jbseubert@gmail.com",
        "senha": "$2b$10$5hKD5APlay0my1Dc1wIG3OKoaBGmggpJb0pWq6K.zWBtnqEOkRhx2",
        "nivel": "ADMIN"
    }
}
```

Se algum campo do json ficar vazio irá retornar:

```js
{
    "message": "Favor preencher todos os campos para poder criar um usuário",
    "status": "N"
}
```
---
<br> 
<br> 
<br> 
<br> 
<br> 
<br> 
<br> 


---
Atualizar um usuario PUT: `http://localhost:3333/api/users/ID`

Modelo de dados para atualizar um usuário  `ID VEM NA URL`

```json
{
  "nome": "",
  "email": "",
  "senha": "",
  "nivel": ""
}
```

`Respostas`

`sucesso`

```json
{
    "message": "Usuário atualizado com sucesso",
    "status": "S",
    "usuarioAtualizado": {
        "id": 2,
        "nome": "Johnny",
        "email": "jbseubert@gmail.com",
        "senha": "Temporario12344",
        "nivel": "NORMAL"
    }
}
```

`falha`

```json
{
    "message": "Favor preencher todos os campos para poder atualizar um usuário",
    "status": "N"
}
```
---
<br> 
<br> 
<br> 
<br> 
<br> 
<br> 
<br> 

---

Deletar um usuario DELETE: `http://localhost:3333/api/users/ID`

Se o usuario existir ou não existir irá retornar:

```json
{
    "message": "Usuario excluido com sucesso",
    "status": "S"
}
```




---
<br> 
<br> 
<br> 
<br> 
<br> 
<br> 
<br> 

---

Verificar o login e senha do usuario se está correto para poder logar

GET: `http://localhost:3333/api/verificarLogin`

```json
{
  "username": "",
  "senha": ""
}
```

### Tipos de Resposta


`sucesso`
```json
{
    "message": "Usuário autenticado com sucesso!",
    "status": "S",
    "username": "johnny"
}
```

`falha`
```json
{
    "message": "Username / senha inválidos",
    "status": "N"
}
```

---"# crud-api-nodejs" 
