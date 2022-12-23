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

module.exports = router;