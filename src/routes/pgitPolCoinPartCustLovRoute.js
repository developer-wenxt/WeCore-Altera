const express = require('express');
const router = express.Router();
const pgitPolCoinPartCustLovController = require('../controllers/pgitPolCoinPartCustLovController');

router.get('/', pgitPolCoinPartCustLovController.get);


module.exports = router;
