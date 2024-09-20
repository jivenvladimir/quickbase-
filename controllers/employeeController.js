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

exports.getEmployeeByUid = async (req, res) => {
    const { uid } = req.params;

    try {
        const employee = await employeeService.getEmployeeByUid(uid);
        if (!employee) {
            return res.status(404).json({ message: 'Employee not found' });
        }
        return res.status(200).json(employee);
    } catch (error) {
        console.error('Error fetching employee:', error);
        return res.status(500).json({ message: 'Failed to retrieve employee' });
    }
};