var express = require('express');
var router = express.Router();
const chuckCtrl = require('../controllers/chuckjoke')

/* GET home page. */
router.get('/', chuckCtrl.index);

module.exports = router;
