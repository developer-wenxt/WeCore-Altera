const express = require('express');
const router = express.Router();
const endBlkSetupController = require('../controllers/endBlkSetupController');

router.get('/', endBlkSetupController.get);

module.exports = router;
