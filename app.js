const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const path = require('path');
const db = require('./db/connection');
const bodyParser = require('body-parser');
const Job = require('./models/Job');

const PORT = 3000;

app.listen(PORT, function() {
    console.log(`O servidor está ativo na porta ${PORT}`);
});

//body parser
app.use(bodyParser.urlencoded({extended: false}));

// handle bars
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//static folder
app.use(express.static(path.join(__dirname, 'public')));

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
    Job.findAll({order: [
        ['createdAt', 'DESC']
    ]})
        .then(jobs => {
            response.render('index', {
                jobs
            })
        });
});

//jobs routes
app.use('/jobs', require('./routes/jobRouter'));