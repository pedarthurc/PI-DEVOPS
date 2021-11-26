//TUDO REFERENTE AO BANCO DE DADOS
const pgp = require('pg-promise')();
console.log('aqui-0');
const db = pgp({
    host: 'ec2-34-226-18-183.compute-1.amazonaws.com',
    database: 'de0gvkdpmp3tqd',
    user: 'lwkjswucvoqsio',
    port: '5432',
    password: 'f011b9f988c1d3bbd37390c1281e50c17ba51d99c940be46415a4aadeb3a8ff7',
});
console.log('aqui-0,5');
module.exports = db;