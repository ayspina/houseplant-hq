var express = require('express');
var router = express.Router();
const plantsCtrl = require('../controllers/plants');

// GET /plants - show all plants 
router.get('/', plantsCtrl.index);

// GET /plants/new - show form for adding new plant post 
router.get('/new', plantsCtrl.new);

//POST /plants - add new plant to index 
router.post('/', plantsCtrl.create);

// GET /plants/:id - show one plant
router.get('/:id', plantsCtrl.show);

// DELETE /plants/:id - delete one plant 
router.delete('/:id', plantsCtrl.delete);

// GET /plants/:id/edit - edit post
router.get('/:id/edit', plantsCtrl.edit);

// PUT /plants/:id - update post 
router.put('/:id', plantsCtrl.update);

module.exports = router;