var express = require('express');
var router = express.Router();
const plantsCtrl = require('../controllers/plants');

// GET /plants - show all plants 
router.get('/', plantsCtrl.index);

module.exports = router;