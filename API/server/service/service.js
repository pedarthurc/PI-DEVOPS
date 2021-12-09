//REGRAS DE NEGÓCIO
const cadastroData = require('../data/data.js');

//ROTA INSERIR NOVO REGISTRO NO BANCO
exports.postInserirCliente = function(post){
    return cadastroData.insertOne(post);
},
//ROTA P/ LER UM REGISTRO DO BANCO
exports.getCliente = function(id){
    return cadastroData.getOne(id);
},
//ROTA P/ ATUALIZAR UM REGISTRO DO BANCO
exports.putAtualizarCliente = function (id, post){
    return cadastroData.updateOne(id,post);
},
//ROTA P/ REMOVER UM REGISTRO DO BANCO
exports.deleteRemocaoCliente = function(id){
    return cadastroData.deleteOne(id);
},
//EXIBIR TODOS DO BANCO
exports.getTodosClientes = function (){
    return cadastroData.getAll();
}