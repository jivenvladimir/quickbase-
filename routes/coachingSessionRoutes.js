const express = require('express');
const router = express.Router();
const coachingController = require('../controllers/coachingSessionController');

// Create a coaching session
router.post('/create', coachingController.createSession);

// Get coaching sessions by employee ID
router.get('/:employeeId', coachingController.getSessionsByEmployee);

module.exports = router;
