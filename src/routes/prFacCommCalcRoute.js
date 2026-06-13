const express = require('express');
const router = express.Router();
const { calculate } = require('../controllers/prFacCommCalcController');

router.get('/', calculate);

module.exports = router;
