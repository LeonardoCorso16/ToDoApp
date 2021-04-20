const ModeloUsuario = require('./models/usuario-modelo');
const UsuarioDao = require('../DAO/usuarios-dao');

function usuarioController(app, bd) {
    const Dao = new UsuarioDao(bd);

    app.get('/usuarios', async (req, res) => {
        UsuarioDAO.listaUsuarios()
        try {
            let usuarioListado = await DAO.listaUsuarios();
            res.status(200).send(usuarioListado);
        } catch (e) {
            res.status(500).send({ mensagem: "Falha ao listar usuarios" });
        }
    })

    app.get('/usarios/:id', (req, set) => {
        try {
            let id = req.params.id;
            let usuarioListadoPorID = await DAO.listaUsuarioPorId(id);
            res.status(200).send(usuarioListadoPorID);
        } catch (e) {
            res.status(500).send({ mensagem: "Falha ao listar id do usuario" });
        }
    })

    app.post('/usuarios', async (req, res) => {
        try {
            const body = req.body;
            const novoUsuario = new UsuarioModel(0, body.NOME, body.EMAIL, body.SENHA);
            let novoUsuarioCriado = await DAO.insereUsuarios(novoUsuario);
            res.status(201).send(novoUsuarioCriado);
        } catch (e) {
            res.status(500).send({ mensagem: "Falha ao criar usuario" });
        }
    })


    app.delete('/usuario/id', async (req, res) => {
        try {
            let id = req.params.id;
            await DAO.deletaUsuario(id);
            res.status(200).send({ mensagem: "Id deletado com sucesso" });
        } catch (e) {
            res.status(500).send({ mensagem: "Falha ao deletar ID" });
        }
    })

    app.put("/usuario/:id", async (req, res) => {
        try {
            let id = req.params.id;
            const body = req.body;
            await DAO.alteraUsuario(id, body);
            res.status(202).send({ mensagem: "Usuario alterado com sucesso" });
        } catch (e) {
            res.status(500).send({ mensagem: "Falha ao alterar usuario" });
        }
    });
}
module.exports = usuarioController;