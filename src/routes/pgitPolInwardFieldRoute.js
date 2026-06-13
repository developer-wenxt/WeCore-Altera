const express = require('express');
const router = express.Router();
const pgitPolInwardFieldController = require('../controllers/pgitPolInwardFieldController');

router.get('/', pgitPolInwardFieldController.get);


module.exports = router;
