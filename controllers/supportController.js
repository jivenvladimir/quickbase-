const supportService = require('../services/supportService');

// Create a new support ticket
exports.createTicket = async (req, res) => {
    const { userId, subject, description, priority } = req.body;
    try {
        const result = await supportService.createTicket(userId, subject, description, priority);
        res.status(201).json({ message: 'Ticket created successfully', ticket: result });
    } catch (error) {
        res.status(500).json({ message: 'Failed to create ticket', error: error.message });
    }
};

// Get support tickets by user
exports.getTicketsByUser = async (req, res) => {
    const { userId } = req.params;
    try {
        const result = await supportService.getTicketsByUser(userId);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: 'Failed to retrieve tickets', error: error.message });
    }
};

// Update ticket status
exports.updateTicketStatus = async (req, res) => {
    const { ticketId } = req.params;
    const { status } = req.body;
    try {
        const result = await supportService.updateTicketStatus(ticketId, status);
        res.status(200).json({ message: 'Ticket status updated successfully', ticket: result });
    } catch (error) {
        res.status(500).json({ message: 'Failed to update ticket', error: error.message });
    }
};
