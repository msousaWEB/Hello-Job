const { response } = require('express');
const express = require('express');
const app = express();
const db = require('./db/connection');

const PORT = 3000;

app.listen(PORT, function() {
    console.log(`O servidor está ativo na porta ${PORT}`);
});

//conexao com banco
db.authenticate()
    .then(() => {
        console.log('conectado');
    })
    .catch(err => {
        console.log('error: ', err);
    })


//rotas
app.get('/' , (require, response) => {
    response.send("HelloJob");
});