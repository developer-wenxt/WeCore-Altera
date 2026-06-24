const express = require('express');
const router = express.Router();
const PGITPOLRISKADDLINFOController = require('../controllers/PGITPOLRISKADDLINFOController');

router.get('/', PGITPOLRISKADDLINFOController.getAll);
router.post('/', PGITPOLRISKADDLINFOController.create);
router.put('/:id', PGITPOLRISKADDLINFOController.update);
router.delete('/:id', PGITPOLRISKADDLINFOController.deleteItem);
router.get('/praiPolId', PGITPOLRISKADDLINFOController.getByPolSysId);
router.post('/deleteRisk', PGITPOLRISKADDLINFOController.deleteRiskProcedure);


module.exports = router;