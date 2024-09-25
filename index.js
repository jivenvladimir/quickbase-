const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const attendanceRoutes = require('./routes/attendanceRoutes');
const employeeRoutes = require('./routes/employeeRoutes');
const supportRoutes = require('./routes/supportRoutes');
const coachiginSessionRoutes = require('./routes/coachingSessionRoutes');


app.use(express.json()); // Middleware to parse JSON
app.use('/api/v1/attendance', attendanceRoutes); // Attendance routes
app.use('/api/v1/employees', employeeRoutes); // Employee routes
app.use('/api/v1/support', supportRoutes); // Employee routes
app.use('/api/v1/coachingSession', coachiginSessionRoutes); // Employee routes


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
