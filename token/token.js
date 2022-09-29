import jwt from 'jsonwebtoken';

const chaveSecreta = "chaveSuperSecreta";

const token = jwt.sign(
    {
        apelido: 'luqui',
        curso: 'segurança e nodejs'
    }, chaveSecreta
);

console.log(token);

const tokenDecodificado = jwt.verify(token, chaveSecreta);
console.log(tokenDecodificado);