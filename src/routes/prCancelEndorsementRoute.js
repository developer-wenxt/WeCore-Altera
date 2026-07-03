const express = require('express');
const router = express.Router();
const { cancel } = require('../controllers/prCancelEndorsementController');

router.post('/', cancel);
router.get('/', cancel);

module.exports = router;
