const express = require('express');
const router = express.Router();
const pgitPolCoinCommLovController = require('../controllers/pgitPolCoinCommLovController');

router.get('/', pgitPolCoinCommLovController.get);


module.exports = router;
