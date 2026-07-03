const express = require('express');
const router = express.Router();
const { calc } = require('../controllers/prTtyOvrCalcController');
router.post('/', calc);
router.get('/', calc);
module.exports = router;
