const express = require('express');
const router = express.Router();
const pgitPolCoinCommFieldController = require('../controllers/pgitPolCoinCommFieldController');

router.get('/', pgitPolCoinCommFieldController.get);


module.exports = router;
