const express = require('express');
const router = express.Router();
const CompanyCtrl = require('../controllers/companyCtrl');

router.get('/companies/all', CompanyCtrl.getAllCompanies);
router.post('/company/create', CompanyCtrl.createCompany);
router.post('/company/review', CompanyCtrl.addReview);

module.exports = router;