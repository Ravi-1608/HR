const mongoose = require('mongoose');

const managerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    ManagerId: {
        type: String,
        required: true,
        unique:true
    },
    email: {
        type: String,
        required: true,
      
    },
    department: {
        type: String,

    },
    mobileNo: {
        type: Number,
        required: true,
       
    },
    location:{
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },


});
const Manager = mongoose.model('Manager', managerSchema);

module.exports = Manager;