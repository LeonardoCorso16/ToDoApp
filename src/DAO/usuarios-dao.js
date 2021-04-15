module.exports = class UsuariosDao {
    constructor(bd) {
        this.bd = bd
    }
    listaUsuarios() {
        return new Promise((resolve, reject) => {
            this.bd.all('SELECT * FROM USUARIOS', (err, usuarios) => {
                if (err) {
                    reject(err)
                }
                else {
                    resolve(usuarios)
                }
            })

        })
    }

    insereUsuario(usuario) {
        return new Promise((resolve, reject) => {
            this.bd.run('INSERT INTO USUARIOS (NOME, EMAIL, SENHA) VALUES(?, ?, ?')
                , [usuario.nome, usuario.email, usuario.senha]
                , (err) => {
                    if (err) {
                        reject('Falha ao inserir usuário')
                    } else {
                        resolve('Usuário inserido com sucesso')
                    }
                }

        }
        )
    }
}