//REGRAS DE NEGÓCIO
const cadastroData = require('../data/data.js');

exports.getAll = function (){
    return cadastroData.getClientes();
}