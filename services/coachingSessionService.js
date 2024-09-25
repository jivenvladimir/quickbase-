const axios = require('axios');
const quickbaseApiUrl = 'https://api.quickbase.com/v1/records';
const headers = {
    'QB-Realm-Hostname': `${process.env.QUICKBASE_REALM}.quickbase.com`,
    'Authorization': `QB-USER-TOKEN ${process.env.QUICKBASE_USER_TOKEN}`,
    'Content-Type': 'application/json',
};

// Function to create a coaching session
exports.createSession = async (sessionData) => {
    try {
        const data = {
            to: process.env.QUICKBASE_COACHING_TABLE_ID,  // Set your Quickbase table ID for coaching sessions
            data: [{
                "fieldId": 6, "value": sessionData.employeeId,  // Employee ID
                "fieldId": 7, "value": sessionData.date,        // Session Date
                "fieldId": 8, "value": sessionData.topic,       // Coaching Topic
                "fieldId": 9, "value": sessionData.notes        // Notes
            }]
        };
        const response = await axios.post(quickbaseApiUrl, data, { headers });
        return response.data;
    } catch (error) {
        console.error('Failed to create coaching session:', error);
        throw new Error('Failed to create coaching session');
    }
};

// Function to get coaching sessions by employee
exports.getSessionsByEmployee = async (employeeId) => {
    try {
        const data = {
            from: process.env.QUICKBASE_COACHING_SESSION_TABLE_ID,
            where: `{'6'.EX.${employeeId}}`,  // Filter by employee ID
            select: [6, 7, 8, 9]  // Select fields: employee ID, date, topic, notes
        };
        const response = await axios.post(`${quickbaseApiUrl}/query`, data, { headers });
        return response.data;
    } catch (error) {
        console.error('Failed to retrieve coaching sessions:', error);
        throw new Error('Failed to retrieve coaching sessions');
    }
};
