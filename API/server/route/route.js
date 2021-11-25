//TRATAMENTO DE REQUISIÇÕES
const express = require('express');
const router = express.Router();
const service = require('../service/service.js');

router.get('/teste',async function(req,res){
    //Definição do comportamento
    res.json([{
        id: 1,
        title: 'REST API: UNIFAP - DEVOPS++PI',
        content: 'Oi mundo',
        date: new Date()
    }]);
});
/*router.get('/clientes',async function(req,res){
    const clientes = await service.getAll();
    res.json(clientes);
});*/

module.exports = router;