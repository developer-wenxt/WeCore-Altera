const express = require('express');
const router = express.Router();
const pgitFacCustRetroFieldController = require('../controllers/pgitFacCustRetroFieldController');

router.get('/', pgitFacCustRetroFieldController.get);


module.exports = router;
