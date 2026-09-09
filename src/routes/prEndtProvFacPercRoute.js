const express = require('express');
const router = express.Router();
const { calculate } = require('../controllers/prEndtProvFacPercController');

router.get('/', calculate);

module.exports = router;
