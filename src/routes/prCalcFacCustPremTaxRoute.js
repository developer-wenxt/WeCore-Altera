const express = require('express');
const router = express.Router();
const { calculate } = require('../controllers/prCalcFacCustPremTaxController');

router.get('/', calculate);

module.exports = router;
