const express = require('express');
const router = express.Router();
const allController = require('../controllers/createUserController')

router.post('/addEmployee',allController.addEmployee)
router.post('/addManager',allController.addManager)

module.exports = router;