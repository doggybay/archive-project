const express = require('express');

const router = express.Router();
const archiveItemsController = require('../controllers/archive_items')

router.get('/archive-items', archiveItemsController.getAllArchiveItems);
router.get('/archive-items/:id', archiveItemsController.getOneArchiveItem);

module.exports = router;