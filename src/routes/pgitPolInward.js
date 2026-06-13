const express = require('express');
const router = express.Router();
const pgitPolInwardController = require('../controllers/pgitPolInwardController');

router.get('/', pgitPolInwardController.getAll);
router.get('/getById', pgitPolInwardController.getById);
router.post('/', pgitPolInwardController.create);
router.put('/:id', pgitPolInwardController.update);
router.delete('/:id', pgitPolInwardController.deleteItem);

module.exports = router;