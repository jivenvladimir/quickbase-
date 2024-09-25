const coachingService = require('../services/coachingSessionService');

// Create coaching session
exports.createSession = async (req, res) => {
    try {
        const sessionData = req.body;
        const result = await coachingService.createSession(sessionData);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ message: 'Error creating coaching session', error: error.message });
    }
};

// Get coaching sessions by employee
exports.getSessionsByEmployee = async (req, res) => {
    try {
        const employeeId = req.params.employeeId;
        const result = await coachingService.getSessionsByEmployee(employeeId);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving coaching sessions', error: error.message });
    }
};
