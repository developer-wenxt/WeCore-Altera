const express = require('express');
const router = express.Router();
const pgitRiPropAllocRcFieldController = require('../controllers/pgitRiPropAllocRcFieldController');

router.get('/', pgitRiPropAllocRcFieldController.get);


module.exports = router;
