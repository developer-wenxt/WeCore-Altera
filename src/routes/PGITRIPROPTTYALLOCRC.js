const express = require('express');
const router = express.Router();
const PGITRIPROPTTYALLOCRCController = require('../controllers/PGITRIPROPTTYALLOCRCController');

router.get('/', PGITRIPROPTTYALLOCRCController.getAll);
router.get('/getBySysId', PGITRIPROPTTYALLOCRCController.getBySysId);
router.get('/:id', PGITRIPROPTTYALLOCRCController.getById);
router.post('/', PGITRIPROPTTYALLOCRCController.create);
router.put('/:id', PGITRIPROPTTYALLOCRCController.update);
router.delete('/:id', PGITRIPROPTTYALLOCRCController.deleteItem);

module.exports = router;