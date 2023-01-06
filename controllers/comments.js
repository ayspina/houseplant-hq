const mongoose = require('mongoose');
const Plant = require('../models/plant');

module.exports = {
    create,
    delete: deleteComment
};

function create(req, res) {
    Plant.findById(req.params.id, function(err, plant) {
        req.body.user = req.user._id
        req.body.userName = req.user.name
        req.body.userAvatar = req.user.picture
        plant.comments.push(req.body);
        console.log(req.body);
        plant.save(function(err) {
            if (err) return res.redirect('/plants');
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