const express = require('express');
const router = express.Router();
const pgitPolInwardLovController = require('../controllers/pgitPolInwardLovController');

router.get('/', pgitPolInwardLovController.get);


module.exports = router;
