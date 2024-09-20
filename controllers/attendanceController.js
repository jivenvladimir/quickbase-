const attendanceService = require('../services/attendanceService');

exports.clockIn = async (req, res) => {
    try {
        const { userId } = req.body;
        const result = await attendanceService.clockIn(userId);
        res.status(200).json(result);
    } catch (error) {
        console.error('Error in clockIn:', error);
        res.status(500).json({ message: 'Failed to clock in' });
    }
};

exports.clockOut = async (req, res) => {
    try {
        const { userId } = req.body;
        const result = await attendanceService.clockOut(userId);
        res.status(200).json(result);
    } catch (error) {
        console.error('Error in clockOut:', error);
        res.status(500).json({ message: 'Failed to clock out' });
    }
};

exports.getAttendance = async (req, res) => {
    try {
        const { userId } = req.params;
        const result = await attendanceService.getAttendance(userId);
        res.status(200).json(result);
    } catch (error) {
        console.error('Error in getAttendance:', error);
        res.status(500).json({ message: 'Failed to retrieve attendance records' });
    }
};
