//TRATAMENTO DE REQUISIÇÕES
const express = require('express');
const router = express.Router();
const service = require('../service/service.js');

router.get('/',async function(req,res){
    //Definição do comportamento
    res.json([{
        id: 1,
        title: 'REST API: UNIFAP - DEVOPSPI',
        content: 'Olá todos',
        date: new Date()
    }]);
});
//ROTA P/ EXIBIR TODOS DO BANCO
router.get('/clientes',async function(req,res){
    const clientes = await service.getTodosClientes();
    res.json(clientes);
});
//ROTA P/ LER UM REGISTRO DO BANCO
router.get('/cliente/:id',async function(req,res){
    const cliente = await service.getCliente(req.params.id);
    res.json(cliente);
});
//ROTA P/ INSERIR NOVO REGISTRO NO BANCO
router.post('/inserir',async function(req,res){
    const post = req.body //objeto json recebido pelo express.json
    const clienteCadastrado = await service.postInserirCliente(post);
    res.json(clienteCadastrado);
}),
//ROTA P/ ATUALIZAR UM REGISTRO DO BANCO
router.put('/atualizar/:id',async function(req,res){
    const post = req.body 
    await service.putAtualizarCliente(req.params.id, post);
    res.end();
}),
//ROTA P/ REMOVER UM REGISTRO DO BANCO
router.delete('/remover/:id',async function(req,res){
    await service.deleteRemocaoCliente(req.params.id);
    res.end();
})
module.exports = router;