const express = require('express');
const router = express.Router();
const pgitRiPropTtyAllocCustFieldController = require('../controllers/pgitRiPropTtyAllocCustFieldController');

router.get('/', pgitRiPropTtyAllocCustFieldController.get);


module.exports = router;
