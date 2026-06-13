const express = require('express');
const router = express.Router();
const { calculate } = require('../controllers/PrFacCustCalcController');

router.get('/', calculate);

module.exports = router;
