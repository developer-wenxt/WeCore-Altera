const express = require('express');
const router = express.Router();
const { calculate } = require('../controllers/prCalcRetroCustPremTaxController');

router.get('/', calculate);

module.exports = router;
