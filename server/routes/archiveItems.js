const express = require('express');

const router = express.Router();
const archiveItemsController = require('../controllers/archiveItems')

router.get('/archive-items', archiveItemsController.getAllArchiveItems);
router.get('/archive-items/:id', archiveItemsController.getOneArchiveItem);
router.delete('/archive-items/:id', archiveItemsController.deleteArchiveItem);
router.post('/archive-items', archiveItemsController.addArchiveItem);
router.patch('/archive-items/:id', archiveItemsController.editArchiveItem)

module.exports = router;