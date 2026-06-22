const express = require('express');
const router = express.Router();
const pgitFacPlaceRiskDtlController = require('../controllers/pgitFacPlaceRiskDtlController');

router.get('/', pgitFacPlaceRiskDtlController.getAll);
router.post('/', pgitFacPlaceRiskDtlController.create);
router.put('/:id', pgitFacPlaceRiskDtlController.update);
router.delete('/:id', pgitFacPlaceRiskDtlController.deleteItem);
router.get('/SysId', pgitFacPlaceRiskDtlController.getByPolSysId);

module.exports = router;    