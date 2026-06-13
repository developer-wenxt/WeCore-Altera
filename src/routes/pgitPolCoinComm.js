const express = require('express');
const router = express.Router();
const pgitPolCoinCommController = require('../controllers/pgitPolCoinCommController');

router.get('/', pgitPolCoinCommController.getAll);
router.post('/', pgitPolCoinCommController.create);
router.put('/:id', pgitPolCoinCommController.update);
router.delete('/:id', pgitPolCoinCommController.deleteItem);

module.exports = router;