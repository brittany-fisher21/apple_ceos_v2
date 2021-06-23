const express = require('express');
const router = express.Router();
const ExecutiveModel = require('../models/ExecutiveModel');

router.get('/', async (req, res) => {
    const nameData = await ExecutiveModel.getAllCEOSData();
    res.render('template', {
        locals: {
            title: 'Apple Ceos 2',
            data: nameData
        },
        partials: {
            body: 'partials/home'
        }
    })
});

module.exports = router;