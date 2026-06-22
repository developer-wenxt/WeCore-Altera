const express = require('express');
const router = express.Router();
const { approveTtyAlloc } = require('../controllers/ttyApproveBtnController');

router.get('/', approveTtyAlloc);
router.post('/', approveTtyAlloc);

module.exports = router;
