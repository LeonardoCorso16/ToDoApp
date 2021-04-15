class Usuario {
    constructor(id, nome, email, senha) {
        this.id = id,
        this.nome = nome,
        this.email = email,
        this.senha = senha
    }

    get id (){
        return this.id;
    }
    get nome (){
        return this.nome;
    }
    get email(){
        return this.email;
    }
    get senha(){
        return this.senha;
    }
}

module.exports = Usuario;