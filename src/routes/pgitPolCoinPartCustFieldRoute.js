const express = require('express');
const router = express.Router();
const pgitPolCoinPartCustFieldController = require('../controllers/pgitPolCoinPartCustFieldController');

router.get('/', pgitPolCoinPartCustFieldController.get);


module.exports = router;
