const express = require('express');
const router = express.Router();
const pgitFacPlaceRiskDtlFieldController = require('../controllers/pgitFacPlaceRiskDtlFieldController');

router.get('/', pgitFacPlaceRiskDtlFieldController.get);


module.exports = router;
