// routes/employeeRoutes.js

const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');

// Route for getting employee records
router.get('/', employeeController.getEmployees);
router.get('/:uid', employeeController.getEmployeeByUid);


module.exports = router;
