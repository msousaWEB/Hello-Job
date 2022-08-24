const express = require('express');
const app = express();
const db = require('./db/connection');
const bodyParser = require('body-parser');

const PORT = 3000;

app.listen(PORT, function() {
    console.log(`O servidor está ativo na porta ${PORT}`);
});

//body parser
app.use(bodyParser.urlencoded({extended: false}));

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

//jobs routes
app.use('/jobs', require('./routes/jobRouter'));