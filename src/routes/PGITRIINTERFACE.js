const express = require('express');
const router = express.Router();
const PGITRIINTERFACEController = require('../controllers/PGITRIINTERFACEController');

router.get('/', PGITRIINTERFACEController.getAll);
router.get('/sysId', PGITRIINTERFACEController.getById);
router.post('/', PGITRIINTERFACEController.create);
router.put('/:id', PGITRIINTERFACEController.update);
router.delete('/:id', PGITRIINTERFACEController.deleteItem);

module.exports = router;