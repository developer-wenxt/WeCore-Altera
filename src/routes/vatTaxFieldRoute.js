const express = require('express');
const router = express.Router();
const vatTaxFieldController = require('../controllers/vatTaxFieldController');

router.get('/', vatTaxFieldController.get);


module.exports = router;
