const { response } = require('express');
const express = require('express');
const app = express();
const PORT = 3000;

app.listen(PORT, function() {
    console.log(`O servidor está ativo na porta ${PORT}`);
});

app.get('/' , (require, response) => {
    response.send("HelloJob");
});