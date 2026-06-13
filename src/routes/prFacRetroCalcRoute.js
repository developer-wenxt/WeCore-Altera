const express = require('express');
const router = express.Router();
const { calculate } = require('../controllers/prFacRetroCalcController');

router.get('/', calculate);

module.exports = router;
