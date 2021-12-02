//GESTÃO DE QUERYS
const database = require('../infra/database.js');

//ROTA INSERIR NOVO REGISTRO NO BANCO
exports.insertOne = function(post){
    return database.one('INSERT INTO cadastro.cliente (nome, cpf, logradouro, num_lograd) VALUES ($1, $2, $3, $4) RETURNING *',[post.nome, post.cpf, post.logradouro, post.num_lograd]);
},
//ROTA P/ REMOVER UM REGISTRO DO BANCO
exports.deleteOne = function (id){
    return database.none('DELETE FROM cadastro.cliente WHERE id = $1',[id]);
},
//EXIBIR TODOS DO BANCO
exports.getOne = function(id){
    return database.oneOrNone('SELECT * FROM cadastro.cliente WHERE id=$1',[id]);
},
//EXIBIR TODOS DO BANCO
exports.getAll = function(){
    return database.query('SELECT * FROM cadastro.cliente');
},
//ROTA P/ ATUALIZAR UM REGISTRO DO BANCO
exports.updateOne = function(id, post){
    return database.none('UPDATE cadastro.cliente SET nome=$1, cpf=$2, logradouro=$3, num_lograd=$4 WHERE id=$5',[post.nome, post.cpf, post.logradouro, post.num_lograd, id]);
}