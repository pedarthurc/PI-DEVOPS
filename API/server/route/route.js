//TRATAMENTO DE REQUISIÇÕES
const express = require('express');
const router = express.Router();
const service = require('../service/service.js');

router.get('/teste',async function(req,res){
    //Definição do comportamento
    res.json([{
        id: 1,
        title: 'REST API: UNIFAP - DEVOPSPI',
        content: 'Olá todos',
        date: new Date()
    }]);
});

//ROTA P/ INSERIR NOVO REGISTRO NO BANCO
router.post('/inserir',async function(req,res){
    const post = req.body //objeto json recebido pelo express.json
    const clienteCadastrado = await service.postInserirCliente(post);
    res.json(clienteCadastrado);
}),
//ROTA P/ LER UM REGISTRO DO BANCO

//ROTA P/ ATUALIZAR UM REGISTRO DO BANCO

//ROTA P/ REMOVER UM REGISTRO DO BANCO

//ROTA P/ EXIBIR TODOS DO BANCO
router.get('/clientes',async function(req,res){
    const clientes = await service.getTodosCliente();
    res.json(clientes);
});
module.exports = router;