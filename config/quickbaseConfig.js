module.exports = {
    //Access
    realm: process.env.QUICKBASE_REALM,
    userToken: process.env.QUICKBASE_USER_TOKEN,

    //Tables
    attendanceTableId: process.env.QUICKBASE_ATTENDANCE_TABLE_ID,
    employeeTableId: process.env.QUICKBASE_EMPLOYEE_TABLE_ID,
    supportTableId: process.env.QUICKBASE_SUPPORT_TABLE_ID,

};
