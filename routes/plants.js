var express = require('express');
var router = express.Router();
const plantsCtrl = require('../controllers/plants');
const isLoggedIn = require('../config/auth');

// GET /plants - show all plants belonging to user
router.get('/', plantsCtrl.index);

// GET /plants/new - show form for adding new plant post 
router.get('/new', isLoggedIn, plantsCtrl.new);

//POST /plants - add new plant to index 
router.post('/', isLoggedIn, plantsCtrl.create);

// GET /plants/:id - show one plant
router.get('/:id', plantsCtrl.show);

// DELETE /plants/:id - delete one plant 
router.delete('/:id', plantsCtrl.delete);

// GET /plants/:id/edit - edit post
router.get('/:id/edit', plantsCtrl.edit);

// PUT /plants/:id - update post 
router.put('/:id', plantsCtrl.update);

module.exports = router;