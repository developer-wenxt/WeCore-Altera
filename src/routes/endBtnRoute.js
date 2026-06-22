const express = require('express');
const router = express.Router();
const { createEndtController } = require('../controllers/endBtnController');

router.post('/', createEndtController);

module.exports = router;

