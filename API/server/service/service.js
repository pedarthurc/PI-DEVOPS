//REGRAS DE NEGÓCIO
const cadastroData = require('../data/data.js');

//ROTA INSERIR NOVO REGISTRO NO BANCO
exports.postInserirCliente = function(post){
    return cadastroData.insertOne(post);
},

//ROTA P/ REMOVER UM REGISTRO DO BANCO
exports.postRemocaoCliente = function(id){
    return cadastroData.deleteOne(id);
},
//EXIBIR TODOS DO BANCO
exports.getTodosCliente = function (){
    return cadastroData.getAll();
}