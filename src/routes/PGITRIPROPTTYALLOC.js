const express = require('express');
const router = express.Router();
const PGITRIPROPTTYALLOCController = require('../controllers/PGITRIPROPTTYALLOCController');

router.get('/', PGITRIPROPTTYALLOCController.getAll);
router.get('/sysId', PGITRIPROPTTYALLOCController.getById);
router.post('/', PGITRIPROPTTYALLOCController.create);
router.put('/:id', PGITRIPROPTTYALLOCController.update);
router.delete('/:id', PGITRIPROPTTYALLOCController.deleteItem);

module.exports = router;