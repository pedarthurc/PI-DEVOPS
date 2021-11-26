//TUDO REFERENTE AO BANCO DE DADOS
const pgp = require('pg-promise')();
//teste de ssl -- remover 'fs' se falar
const fs = require('fs');

console.log('aqui-0');
const db = pgp({
    host: 'ec2-34-226-18-183.compute-1.amazonaws.com',
    database: 'de0gvkdpmp3tqd',
    user: 'lwkjswucvoqsio',
    port: '5432',
    password: 'f011b9f988c1d3bbd37390c1281e50c17ba51d99c940be46415a4aadeb3a8ff7',
    //teste ssl - remover daqui
    ssl: {
        rejectUnauthorized : false,
        ca   : fs.readFileSync("server-ca.pem").toString(),
        key  : fs.readFileSync("client-key.pem").toString(),
        cert : fs.readFileSync("client-cert.pem").toString(),
  }
  //até aqui
});
console.log('aqui-0,5');
module.exports = db;