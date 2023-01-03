const mongoose = require('mongoose');
const Plant = require('../models/plant');

module.exports = {
    create,
    delete: deleteComment
};

function create(req, res) {
    Plant.findById(req.params.id, function(err, plant) {
        plant.comments.push(req.body);
        plant.save(function(err) {
            res.redirect(`/plants/${plant._id}`);
        });

    });
};

function deleteComment(req, res) {
    Plant.findOne({'comments._id': req.params.id}, function(err, plant) {
        plant.comments.remove(req.params.id);
        plant.save(function(err) {
            res.redirect(`/plants/${plant._id}`);
        });
    });
};