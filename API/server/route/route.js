//TRATAMENTO DE REQUISIÇÕES
const express = require('express');
const router = express.Router();
const service = require('../service/service.js');

//TRAZER TODOS DO BANCO
router.get('/teste',async function(req,res){
    //Definição do comportamento
    res.json([{
        id: 1,
        title: 'REST API: UNIFAP - DEVOPSPI',
        content: 'Olá todos',
        date: new Date()
    }]);
    console.log('aqui1');
});
router.get('/clientes',async function(req,res){
    const clientes = await service.getAll();
    res.json(clientes);
    console.log('aqui5');
});

module.exports = router;