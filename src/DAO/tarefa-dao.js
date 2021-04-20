const tarefas = require("../models/tarefa-model");

module.exports = class tarefadao {

    constructor(bd) {
        this.bd = bd;
    }

    listaTarefas() {
        return new Promise((resolve, reject) => {
            this.bd.all('SELECT * FROM TAREFAS',
                (err, tarefas) => {
                    if (err) {
                        rej(err)
                    } else {
                        res(tarefas)
                    }
                })

        }
        )
    }

    insereTarefa(tarefa) {
        return new Promise((resolve, reject) => {
          this.bd.run(
            "INSERT INTO TAREFAS (Id, DESCRICAO, STATUS, DATACRIACAO, ID_USUARIO) VALUES (?,?,?,?,?)",
            (err) => {
              if (err) {
                rej("Falha ao inserir tarefa");
              } else {
                res("Tarefa inserida com sucesso");
              }
            }
          )
        })
      }

      listaIdPorTarefas(id) {
        return new Promise((reject, resolve) => {
          this.bd.all( "SELECT * FROM TAREFAS WHERE ID = (?)", [id], (err, id) => {
              if (err) {
                reject(err);
              } else {
                resolve(id);
              }
            }
          );
        });
      }

      deletaTarefa(id) {
        return new Promise((reject, resolve) => {
          this.bd.run("DELETE FROM TAREFAS WHERE ID = (?)", [id], (err) => {
            if (err) {
              reject("Falha ao deletar tarefa");
            } else {
              resolve("tarefa deletada com sucesso");
            }
          });
        });
      }
    
      alteraTarefa(id, tarefas) {
        return new Promise((reject, resolve) => {
          this.bd.run( "UPDATE TAREFAS SET STATUS = (?), DESCRICAO = (?), WHERE Id = (?)", [tarefas.titulo, tarefas.descricao, tarefas.status, tarefas.data, tarefas.idusuario, id],
            (err) => {
              if (err) {
                reject("Falha ao alterar tarefa");
              } else {
                resolve("Tarefa alterado com sucesso");
              }
            }
          );
        });
      }
}