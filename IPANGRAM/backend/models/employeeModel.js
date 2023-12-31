const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    EmployeeId: {
        type: String,
        required: true,
        unique:true
    },
    email: {
        type: String,
        required: true
       
    },
    department: {
        type: String,

    },
    mobileNo: {
        type: Number,
        required: true
      
    },
    password: {
        type: String,
        required: true,
    },
    location:{
        type: String,
        required: true,
    },

});
const Employee = mongoose.model('Employee', employeeSchema );

module.exports = Employee;