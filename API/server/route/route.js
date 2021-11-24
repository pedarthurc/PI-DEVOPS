const express = require('express');
const router = express.Router();

router.get('/',async function(req,res){
    //Definição do comportamento
    res.json([{
        id: 1,
        title: 'REST API: UNIFAP - DEVOPS++PI',
        content: 'Oi mundo',
        date: new Date()
    }]);
})

module.exports = router;