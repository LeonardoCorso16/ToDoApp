const TarefaModel = require('../models/tarefa-model.js');
const TarefaDao = require('../DAO/tarefa-dao.js');
const tarefas = require('../models/tarefa-model.js');

function tarefaController(app, bd) {
    const DAO = new TarefaDao(bd)

    app.get('/tarefas', async (req, res) => {

        DAO.listaTarefas()
            .then((tarefas) => res.send(tarefas))
            .catch((err) => res.send(err))
    })

    app.get('/tarefas/:nome', async (req, res) => {

        TarefasDAO.listaIdPorTarefas(req.params.id)
            .then(tarefas => res.send(tarefas))
            .catch(error => res.send(error))

    })


    app.post('/tarefas', async (req, res) => {
        const tarefa = req.body;

        const TarefaNova = new tarefasModel(0, tarefa.titulo, tarefa.descricao, tarefa.status, tarefa.date, tarefa.idusuario);

        tarefasDAO.insereTarefa(tarefasModel)
            .then(result => res.send(result))
            .catch(error => res.send(error))

    });


    app.delete('/tarefas/:id', async (req, res) => {
        const id = req.params.id;
        await tarafasDAO.deletaTarefa(id)
            .then(result => res.send(result))
            .catch(error => res.send(error))

    })


    app.put('/tarefas/:id', async (req, res) => {
        const body = req.body;
        const id = req.params.id;
        const TarefasModel = new TarefasModel(0, tarefa.titulo, tarefa.descricao, tarefa.status, tarefa.date, tarefa.idusuario);

        tarefasDAO.alteraTarefa(id, TarefasModel)
            .then(result => res.send(result))
            .catch(error => res.send(error))

    })
}

module.exports = tarefaController;