const axios = require('axios');
const config = require('../config/quickbaseConfig'); 

const quickbaseApiUrl = 'https://api.quickbase.com/v1/records/query'; 
const headers = {
    'QB-Realm-Hostname': `${config.realm}.quickbase.com`,
    'Authorization': `QB-USER-TOKEN ${config.userToken}`,
    'Content-Type': 'application/json',
};

// Function to get employee records
exports.getEmployees = async () => {
    try {
        console.log('Employee Table ID:', process.env.QUICKBASE_ATTENDANCE_TABLE_ID); 

        const data = {
            from: config.employeeTableId, 
            select: [3,6, 7, 8] 
        };

        const response = await axios.post(quickbaseApiUrl, data, { headers });
        return response.data;
    } catch (error) {
        console.error('Error retrieving employee records:', error.response ? error.response.data : error.message);
        throw new Error('Failed to retrieve employee records');
    }
};

exports.getEmployeeByUid = async (uid) => {
    try {
        const data = {
            from: process.env.QUICKBASE_EMPLOYEE_TABLE_ID,
            where: `{ '3'.EX.${uid} }`,
            select: [6, 7, 8]
        };
        const response = await axios.post(quickbaseApiUrl, data, { headers });
        return response.data;
    } catch (error) {
        console.error('Failed to retrieve employee:', error);
        throw new Error('Failed to retrieve employee');
    }
};