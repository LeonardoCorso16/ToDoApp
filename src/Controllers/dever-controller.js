const DeverModel = require('../models/dever-model.js');
const DeverDao = require('../DAO/dever-dao.js');

function deverController(app, bd) {
    
    const DAO = new DeverDao(bd)
    app.get('/deveres', (req, res) => {
        DAO.listardever()
            .then((deveres) => res.send(usuarios))
            .catch((err) => res.send(err))
    })

    app.get('/deveres/:nome', (req, res) => {
        const nome = req.params.nome;
        const deveres = bd.deveres;

        deveres.forEach((dever) => {
            console.log(dever);
            if(nome === dever.nome) {
                return res.send(dever)
            } else {
                res.send("E-mail não encontrado")
            }
        })  
    })


    app.post('/deveres', (req, res) => {
        const body = req.body;
        const dever = new DeverModel(body.nome, body.status, body.email);
        bd.deveres.push(dever)
        res.send(dever)
    })
    

    app.delete('/deveres/:nome', (req, res) => {
        const nome = req.params.nome;
        const array = bd.deveres;
        array.forEach(elemento => {
            if(nome === elemento.nome) {
                array.splice(array.indexOf(elemento), 1)
                res.send("Usuario Deletado")
            } else {
                res.send("Não encontrado")
            }
        })
    })


    app.put('/deveres/:nome', (req, res) => {
        const nome = req.params.nome
        const array = bd.deveres;
        array.forEach(dever => {
            if(nome == dever.nome) {
                dever.nome = req.body.nome;
                return res.send(dever)
            } else {
                res.send("Não encontrado")
            }
        })
    })
}

module.exports = deverController;