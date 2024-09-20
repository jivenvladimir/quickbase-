const employeeService = require('../services/employeeService');

exports.getEmployees = async (req, res) => {
    try {
        const employees = await employeeService.getEmployees();
        res.status(200).json(employees);
    } catch (error) {
        console.error('Error in getEmployees:', error);
        res.status(500).json({ message: 'Failed to retrieve employee records' });
    }
};
