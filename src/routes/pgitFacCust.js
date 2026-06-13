const express = require('express');
const router = express.Router();
const pgitFacCustController = require('../controllers/pgitFacCustController');

router.get('/', pgitFacCustController.getAll);
router.post('/', pgitFacCustController.create);
router.put('/:id', pgitFacCustController.update);
router.delete('/:id', pgitFacCustController.deleteItem);
router.get('/SysId', pgitFacCustController.getByPolSysId);

module.exports = router;