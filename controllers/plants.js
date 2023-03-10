const mongoose = require('mongoose');
const Plant = require('../models/plant');

module.exports = {
    index,
    new: newPlant,
    create,
    show,
    delete: deletePlant,
    edit,
    update
};

function index(req, res) {
    Plant.find({}, function(err, plants) {
        res.render('plants/index', { title: 'DISCOVER PLANTS IN YOUR AREA', plants});
    });   
};

function newPlant(req, res) {
    res.render('plants/new', { title: 'ADD A NEW PLANT'});
};

function create(req, res) {
    req.body.petSafe = !!req.body.petSafe;
    req.body.stillAvailable = !!req.body.stillAvailable;
    const plant = new Plant(req.body);
    plant.userSelling = req.user._id;
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

function deletePlant(req, res) {
    Plant.findOneAndDelete({_id: req.params.id}, function(err, plant) {
        res.redirect('/plants');
    })
};

function edit(req, res) {
    Plant.findById(req.params.id, function(err, plant) {
        res.render('plants/edit', { title: 'Edit Listing', plant });
    });
};

function update(req, res) {
    req.body.stillAvailable = !!req.body.stillAvailable;
    Plant.findByIdAndUpdate(req.params.id, req.body, function(err, plant) {
            res.redirect('/plants');
        });
};