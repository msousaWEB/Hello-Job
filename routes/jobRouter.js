const { response } = require('express');
const express = require('express');
const router = express.Router();
const Job = require('../models/Job');
//form add
router.get('/add', (require, response) => {
    response.render('add');
})

//detalhe da vaga
router.get('/view/:id', (require, response) => Job.findOne({
    where: {id: require.params.id}
}).then(job => {
    response.render('view', {
        job
    });
}).catch(err => console.log(err))
);

router.post('/add', (require, response) => {
    let {title, salary, company, description, email, new_job} = require.body;

    //insert
    Job.create({
        title,
        description,
        salary,
        company,
        email,
        new_job
    })
        .then(() => response.redirect('/'))
        .catch(err => console.log('error: ', err));
});

module.exports = router