const express = require('express');
const router = express.Router();
const allController = require('../controllers/userAuthController');

router.post('/Employee',allController.employeeAuth)
router.post('/Manager',allController.managerAuth)

module.exports = router;