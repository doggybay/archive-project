const express = require('express');

const router = express.Router();

const typesController = require('../controllers/types')

router.get('/types', typesController.getAllTypes);

module.exports = router;