//GESTÃO DE QUERYS
const database = require('../infra/database.js');

//ROTA INSERIR NOVO REGISTRO NO BANCO
exports.insertOne = function(post){
    return database.one('INSERT INTO cadastro.cliente (nome, cpf, logradouro, num_lograd) VALUES ($1, $2, $3, $4) RETURNING *',[cliente.nome, cliente.cpf, cliente.logradouro, cliente.num_lograd]);
},
//ROTA P/ REMOVER UM REGISTRO DO BANCO
exports.deleteOne = function (id){
    return database.none('DELETE FROM cadastro.cliente WHERE id = $1'[id]);
},
//EXIBIR TODOS DO BANCO
exports.getAll = function(){
    return database.query('SELECT * FROM cadastro.cliente');
}