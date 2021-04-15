module.exports = class DeverDao {

    constructor(bd) {
        this.bd = bd;
    }

    listardever() {
        return new Promise((res, rej) => {
            this.bd.all('SELECT * FROM DEVER',
                (err, dever) => {
                    if (err) {
                        rej(err)
                    } else {
                        res(dever)
                    }
                })

        }
        )
    }

    insereDever(dever) {
        return new Promise((res, rej) => {
            this.bd.run('INSERT INTO DEVER (TITULO, DESCRICAO, STATUS, DATACRIACAO) VALUES (?,?,?,?)'
                , [dever.titulo, dever.descricao, dever.status, dever.datacriacao]
                , (err) => {
                    if (err) {
                        rej('Falha ao inserir dever')
                    } else {
                        res('Dever inserida com sucesso')
                    }
                })
        })
    }
}