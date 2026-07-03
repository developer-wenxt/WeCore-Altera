const express = require('express');
const router = express.Router();
const { deleteTrans } = require('../controllers/prDelTransDetController');

router.post('/', deleteTrans);
router.get('/', deleteTrans);

module.exports = router;
