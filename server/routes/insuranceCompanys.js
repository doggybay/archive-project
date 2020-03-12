const express = require('express');

const router = express.Router();

const insCompanysController = require('../controllers/insuranceCompanys')

router.get('/insurance-companys', insCompanysController.getAllInsCompanys);

module.exports = router;