const mongoose = require('mongoose');
const Plant = require('../models/plant');

module.exports = {
    index
};

function index(req, res) {
    res.render('plants/index', { title: 'MY PLANTS' });
};