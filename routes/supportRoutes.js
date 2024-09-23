const express = require('express');
const router = express.Router();
const supportController = require('../controllers/supportController');

// Route to create a new support ticket
router.post('/tickets', supportController.createTicket);

// Route to get tickets by user
router.get('/tickets/user/:userId', supportController.getTicketsByUser);

// Route to update the status of a support ticket
router.put('/tickets/:ticketId', supportController.updateTicketStatus);

module.exports = router;
