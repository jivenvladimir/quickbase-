// routes/employeeRoutes.js

const express = require('express');
const router = express.Router();
const { getEmployees } = require('../controllers/employeeController');

// Route for getting employee records
router.get('/', getEmployees);

module.exports = router;
