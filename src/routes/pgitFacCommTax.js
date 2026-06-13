const express = require('express');
const router = express.Router();
const pgitFacCommTaxController = require('../controllers/pgitFacCommTaxController');

router.get('/', pgitFacCommTaxController.getAll);
router.post('/', pgitFacCommTaxController.create);
router.put('/:id', pgitFacCommTaxController.update);
router.delete('/:id', pgitFacCommTaxController.deleteItem);
router.get('/SysId', pgitFacCommTaxController.getByPolSysId);

module.exports = router;