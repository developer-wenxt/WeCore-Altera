const express = require('express');
const router = express.Router();
const pgitFacPlacePcDtlFieldController = require('../controllers/pgitFacPlacePcDtlFieldController');

router.get('/', pgitFacPlacePcDtlFieldController.get);


module.exports = router;
