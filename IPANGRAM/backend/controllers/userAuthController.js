// const Manager = require('../models/managerModel')
const Employee = require('../models/employeeModel')
const Manager = require('../models/managerModel')
const employeeAuth = async (req, res) => {
    try {
        
        const{EmployeeId,password} = req.body
        //finding employee-id and password using mongodb query
        const user = await Employee.findOne({EmployeeId,password})
        if (user) {
            res.status(200).json({ message: 'Success',user});
        } else {
            res.status(401).json({ message: 'Invalid employee ID or password' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

const managerAuth = async (req, res) => {
    try {
        
        const{ManagerId,password} = req.body
        const user = await Manager.findOne({ManagerId,password})
        if (user) {
            res.status(200).json({ message: 'Success',user});
        } else {
            res.status(401).json({ message: 'Invalid manager ID or password' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = {
    employeeAuth,
    managerAuth,
};
