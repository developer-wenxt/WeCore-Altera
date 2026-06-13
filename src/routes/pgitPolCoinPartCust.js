const express = require('express');
const router = express.Router();
const pgitPolCoinPartCustController = require('../controllers/pgitPolCoinPartCustController');

router.get('/', pgitPolCoinPartCustController.getAll);
router.post('/', pgitPolCoinPartCustController.create);
router.put('/:id', pgitPolCoinPartCustController.update);
router.delete('/:id', pgitPolCoinPartCustController.deleteItem);

module.exports = router;