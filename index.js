const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const attendanceRoutes = require('./routes/attendanceRoutes');
const employeeRoutes = require('./routes/employeeRoutes');

app.use(express.json()); // Middleware to parse JSON
app.use('/api/attendance', attendanceRoutes); // Attendance routes
app.use('/api/employees', employeeRoutes); // Employee routes

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
