import { createHash } from 'crypto';

function criaHash(senha) {
    return createHash('sha256').update(senha).digest('hex');
}

console.log(criaHash("gustavito lucas"));

class Usuario {
    constructor(nome, senha) {
        this.nome = nome;
        this.hash = criaHash(senha);
    }

    autentica(nome, senha) {
        if (nome === this.nome && this.hash === criaHash(senha)) {
            console.log(`Usuário ${nome} autenticado com sucesso!`);
            return true;
        }

        console.log("Usuário ou senha incorretos!")
        return false;
    }
}

const usuario1 = new Usuario('Luquitas', "123456");
const usuario2 = new Usuario('Gusta', "1234561");
usuario1.autentica('Luquitas', '123456');
usuario2.autentica('Gusta', '1234561');