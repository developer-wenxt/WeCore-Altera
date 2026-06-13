const express = require('express');
const router = express.Router();
const pgitFacCustRetroController = require('../controllers/pgitFacCustRetroController');

router.get('/', pgitFacCustRetroController.get);


module.exports = router;
