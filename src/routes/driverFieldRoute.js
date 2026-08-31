const express = require('express');
const router = express.Router();
const buttonFieldController = require('../controllers/driverFieldController');

router.get('/', buttonFieldController.get);

module.exports = router;
