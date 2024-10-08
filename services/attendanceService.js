const axios = require('axios');

const quickbaseApiUrl = 'https://api.quickbase.com/v1/records/query';
const headers = {
    'QB-Realm-Hostname': `${process.env.QUICKBASE_REALM}.quickbase.com`,
    'Authorization': `QB-USER-TOKEN ${process.env.QUICKBASE_USER_TOKEN}`,
    'Content-Type': 'application/json',
};

// Function to clock in
exports.clockIn = async (userId) => {
    try {
        const data = {
            to: process.env.QUICKBASE_ATTENDANCE_TABLE_ID,
            data: [
                {
                    "6": { "value": userId },
                    "7": { "value": new Date().toISOString() }
                }
            ]
        };
        const response = await axios.post('https://api.quickbase.com/v1/records', data, { headers });
        return response.data;
    } catch (error) {
        console.error('Failed to clock in:', error.response ? error.response.data : error.message);
        throw new Error('Failed to clock in');
    }
};

// Function to clock out
exports.clockOut = async (userId) => {
    try {
        const data = {
            to: process.env.QUICKBASE_ATTENDANCE_TABLE_ID,
            data: [
                {
                    "6": { "value": userId }, 
                    "8": { "value": new Date().toISOString() }
                }
            ]
        };
        const response = await axios.post('https://api.quickbase.com/v1/records', data, { headers });
        return response.data;
    } catch (error) {
        console.error('Failed to clock out:', error.response ? error.response.data : error.message);
        throw new Error('Failed to clock out');
    }
};

// Function to get attendance records
exports.getAttendance = async (userId) => {
    try {
        const data = {
            from: process.env.QUICKBASE_ATTENDANCE_TABLE_ID,
            where: `{'6'.EX.${userId}}`,
            select: [6, 7, 8, 9, 10, 11, 12]
        };
        const response = await axios.post(quickbaseApiUrl, data, { headers });
        return response.data;
    } catch (error) {
        console.error('Failed to retrieve attendance records:', error.response ? error.response.data : error.message);
        throw new Error('Failed to retrieve attendance records');
    }
};
