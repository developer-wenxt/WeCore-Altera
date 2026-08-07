const express = require('express');
const router = express.Router();
const { execute } = require('../controllers/prRiPropTtyAllocController');

router.get('/', execute);
router.post('/', execute);

module.exports = router;
