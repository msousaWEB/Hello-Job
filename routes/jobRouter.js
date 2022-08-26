const express = require('express');
const router = express.Router();
const Job = require('../models/Job');

router.get('/add', (require, response) => {
    response.render('add');
})

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