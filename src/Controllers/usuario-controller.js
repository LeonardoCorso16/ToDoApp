const ModeloUsuario = require ('./models/usuario-modelo');
const bodyParser = require('body-parser');
const UsuarioDao = require('../DAO/usuarios-dao');
const sqlite = require('sqlite3').verbose();
const db = new sqlite.Database('')


function usuarioController (app, bd) {
    const UsuarioDao = new UsuarioDao(bd);
   
    app.get ('/usuarios' , (req, res)=> {
        console.log('Teste')
        const usuario = bd.usuarios
        res.send(usuarios)

    })

    app.get('/usarios/:email', (req,set) => {
        console.log ('[Atenção chegou um email ai parça]')
        const usuarios = bd.usuarios
        let filtrar = users.filter({email:req.params.email})
        res.send(usuarios)
    })

    app.post ('/usuarios', (req, res)=> {
        res.send('Rota ativada com POST e recurso usuarios: valores de usuarios devem ser retornados (?)')
        
    })

    app.delete('/usuario/email' , (req, res)=>{
    const email = Request.params.email
    const usuarios = users.filter(usuario => usuario._email == email)
    Response.send(`Email:${request.params.nome} deletado`)
})}