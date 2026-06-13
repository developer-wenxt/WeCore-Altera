const express = require('express');
const router = express.Router();
const pgitPolScheduleController = require('../controllers/pgitPolScheduleController');

router.get('/', pgitPolScheduleController.getAll);
router.post('/', pgitPolScheduleController.create);
router.put('/:id', pgitPolScheduleController.update);
router.delete('/:id', pgitPolScheduleController.deleteItem);

module.exports = router;