const express = require('express');
const router = express.Router();
const pgitFacCustRetroController = require('../controllers/pgitFacCustRetroController');

router.get('/', pgitFacCustRetroController.getAll);
router.post('/', pgitFacCustRetroController.create);
router.put('/:id', pgitFacCustRetroController.update);
router.delete('/:id', pgitFacCustRetroController.deleteItem);

module.exports = router;