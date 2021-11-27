const express = require('express');             //importa o express
const app = express();                          //declara app invocando caracteristicas do express

app.use(express.json());
app.use('/',require('./route/route.js'));       //midware para endereçamento de arquivos distribuidos no projeto 

const PORT = 3000;
app.listen(PORT);