const axios = require('axios');

const quickbaseApiUrl = 'https://api.quickbase.com/v1/records';
const headers = {
    'QB-Realm-Hostname': `${process.env.QUICKBASE_REALM}.quickbase.com`,
    'Authorization': `QB-USER-TOKEN ${process.env.QUICKBASE_USER_TOKEN}`,
    'Content-Type': 'application/json',
};

// Create a new support ticket
exports.createTicket = async (userId, subject, description, priority) => {
    const data = {
        to: process.env.QUICKBASE_SUPPORT_TABLE_ID, // Ensure your support table ID is in your environment variables
        data: [
            { fieldId: 6, value: userId }, // Related Employee
            { fieldId: 7, value: subject }, // Subject field
            { fieldId: 8, value: description }, // Description field
            { fieldId: 9, value: priority }, // Priority field
            { fieldId: 10, value: 'Open' } // Default status: Open
        ]
    };

    const response = await axios.post(quickbaseApiUrl, data, { headers });
    return response.data;
};

// Get tickets by user
exports.getTicketsByUser = async (userId) => {
    const data = {
        from: process.env.QUICKBASE_SUPPORT_TABLE_ID,
        where: `{'6'.EX.${userId}}`, // Assuming 6 is the user ID field
        select: [6, 7, 8, 9, 10] // Select relevant fields
    };

    const response = await axios.post(`${quickbaseApiUrl}/query`, data, { headers });
    return response.data;
};

// Update ticket status
exports.updateTicketStatus = async (ticketId, status) => {
    const data = {
        to: process.env.QUICKBASE_SUPPORT_TABLE_ID,
        data: [
            { fieldId: 3, value: ticketId }, // Assuming 3 is the Ticket ID field
            { fieldId: 10, value: status } // Status field
        ]
    };

    const response = await axios.post(`${quickbaseApiUrl}/query`, data, { headers });
    return response.data;
};
