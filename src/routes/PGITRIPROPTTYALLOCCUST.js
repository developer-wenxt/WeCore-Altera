const express = require('express');
const router = express.Router();
const PGITRIPROPTTYALLOCCUSTController = require('../controllers/PGITRIPROPTTYALLOCCUSTController');

router.get('/', PGITRIPROPTTYALLOCCUSTController.getAll);
router.get('/getBySysId', PGITRIPROPTTYALLOCCUSTController.getBySysId);
router.get('/:id', PGITRIPROPTTYALLOCCUSTController.getById);
router.post('/', PGITRIPROPTTYALLOCCUSTController.create);
router.put('/:id', PGITRIPROPTTYALLOCCUSTController.update);
router.delete('/:id', PGITRIPROPTTYALLOCCUSTController.deleteItem);

module.exports = router;