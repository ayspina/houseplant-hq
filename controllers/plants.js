const mongoose = require('mongoose');
const Plant = require('../models/plant');

module.exports = {
    index,
    new: newPlant,
    create,
    show
};

function index(req, res) {
    Plant.find({}, function(err, plants) {
        res.render('plants/index', { title: 'MY PLANTS', plants });
    });    
};

function newPlant(req, res) {
    res.render('plants/new', { title: 'ADD A NEW PLANT'});
};

function create(req, res) {
    req.body.petSafe = !!req.body.petSafe;
    const plant = new Plant(req.body);
    plant.save(function(err) {
        if (err) return res.redirect('plants/new');
        res.redirect('/plants');
        console.log(req.body);
    });  
};

function show(req, res) {
    Plant.findById(req.params.id, function(err, plant) {
        res.render('plants/show', { title: `${plant.name}`, plant });
    });
};