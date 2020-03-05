const express = require('express');

const router = express.Router();
const archiveItemsController = require('../controllers/archiveItems')

router.get('/archive-items', archiveItemsController.getAllArchiveItems);
router.get('/archive-items/:id', archiveItemsController.getOneArchiveItem);
router.post('/archive-items', archiveItemsController.addArchiveItem);
router.patch('/archive-items/:id', archiveItemsController.editArchiveItem)

module.exports = router;