const express = require('express');
const router = express.Router();
const { confirmCancelRI } = require('../controllers/riConCanBtnController');

router.get('/', confirmCancelRI);
router.post('/', confirmCancelRI);

module.exports = router;
