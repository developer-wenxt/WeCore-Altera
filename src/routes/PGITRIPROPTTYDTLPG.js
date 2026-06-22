const express = require('express');
const router = express.Router();
const PGITRIPROPTTYDTLPGController = require('../controllers/PGITRIPROPTTYDTLPGController');

router.get('/', PGITRIPROPTTYDTLPGController.getAll);
router.get('/sysId', PGITRIPROPTTYDTLPGController.getById);
router.post('/', PGITRIPROPTTYDTLPGController.create);
router.put('/:id', PGITRIPROPTTYDTLPGController.update);
router.delete('/:id', PGITRIPROPTTYDTLPGController.deleteItem);

module.exports = router;