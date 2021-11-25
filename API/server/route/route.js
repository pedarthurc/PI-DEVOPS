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
})

module.exports = router;