//GESTÃO DE QUERYS
const database = require('../infra/database.js');

exports.getClientes = function(){
    return database.query('SELECT * FROM cadastro.cliente');
    console.log('aqui3');
}