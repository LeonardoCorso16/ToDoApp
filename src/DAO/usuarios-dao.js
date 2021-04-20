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

  listaUsuarioPorId(id) {
    return new Promise((reject, resolve) => {
      this.bd.all("SELECT * FROM USUARIOS WHERE ID = (?)", [id], (err, usuarios) => {
        if (err) {
          rej(err);
        } else {
          res(usuarios);
        }
      });
    });
  }

  deletaUsuario(usuario) {
    return new Promise((resolve, reject) => {
      this.bd.run("DELETE FROM USUARIOS WHERE EMAIL = (?)", [usuario], (err) => {
        if (err) {
          reject("Falha ao excluir usuário");
        } else {
          resolve("Usuário excluido com sucesso");
        }
      }
      );
    });
  }


  alteraUsuario(usuario, body) {
    return new Promise((res, rej) => {
      this.bd.run("UPDATE USUARIOS SET NOME = (?), SENHA = (?) WHERE EMAIL = (?)",
        [body.NOME, body.SENHA, usuario],
        (err) => {
          if (err) {
            rej("Falha ao alterar usuário");
          } else {
            res("Usuário alterado com sucesso");
          }
        }
      );
    });
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
