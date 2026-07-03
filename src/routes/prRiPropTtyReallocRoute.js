const express = require('express');
const router = express.Router();
const { realloc } = require('../controllers/prRiPropTtyReallocController');

router.post('/', realloc);
router.get('/', realloc);

module.exports = router;
