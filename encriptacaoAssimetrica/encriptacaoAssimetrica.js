import { generateKeyPairSync } from "crypto";

const { privateKey, publicKey } = generateKeyPairSync('rsa', {
    modulusLength: 2048,
    publicKeyEncoding: {
        type: 'spki',
        format: 'pem',
    },
    privateKeyEncoding: {
        type: 'pkcs8',
        format: 'pem'
    },
});

// console.log(privateKey, publicKey);

import { publicEncrypt, privateDecrypt } from "crypto";

const dadosCriptografados = publicEncrypt(
    publicKey,
    Buffer.from("Mensagem super secretaa!")
);

console.log(dadosCriptografados.toString('hex'));

const dadosDecifrados = privateDecrypt(
    privateKey,
    dadosCriptografados
);

console.log(dadosDecifrados.toString('utf-8'));
