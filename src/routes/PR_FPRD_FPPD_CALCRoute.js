const express = require('express');
const router = express.Router();
const { calculate } = require('../controllers/PR_FPRD_FPPD_CALCController');

router.get('/', calculate);

module.exports = router;
