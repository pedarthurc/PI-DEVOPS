//TUDO REFERENTE AO BANCO DE DADOS
const pgp = require('pg-promise')();
const db = pgp({
    user: 'lwkjswucvoqsio',
    password: 'f011b9f988c1d3bbd37390c1281e50c17ba51d99c940be46415a4aadeb3a8ff7',
    host: 'ec2-34-226-18-183.compute-1.amazonaws.com',
    port: '5432',
    database: 'de0gvkdpmp3tqd'
});

module.exports = db;