var express = require('express');
var router = express.Router();
const placesCtrl = require('../controllers/places')

router.get('/', placesCtrl.index);
router.get('/new', placesCtrl.new);

module.exports = router;