const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const port = 3000;

const quickbaseUrl = 'https://api.quickbase.com/v1/records/query';  // Correct endpoint for querying records

app.use(express.json());

// Example endpoint to get records
app.get('/get-records', async (req, res) => {
    try {
        const response = await axios.post(quickbaseUrl, {
            from: process.env.QUICKBASE_TABLE_ID,  // Your Table ID
            // select: [3, 6, 7],  // Columns to retrieve
            // where: "{'3'.EX.'value'}"  // Modify according to your query
        }, {
            headers: {
                'QB-Realm-Hostname': `${process.env.QUICKBASE_REALM}.quickbase.com`,
                'Authorization': `QB-USER-TOKEN ${process.env.QUICKBASE_USER_TOKEN}`,
                'Content-Type': 'application/json'
            }
        });
        res.json(response.data);
    } catch (err) {
        console.error('Error fetching records:', err.response ? err.response.data : err.message);
        res.status(500).json({ error: err.message });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
