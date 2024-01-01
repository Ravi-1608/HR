const Manager = require('../models/managerModel');
const Employee = require('../models/employeeModel');

const addEmployee = async (req, res) => {
    try {
        const {
            name,
            EmployeeId,
            email,
            department,
            mobileNo,
            location,
            password,
        } = req.body;

        const employee = new Employee({
            name,
            EmployeeId,
            email,
            department,
            mobileNo,
            location,
            password
        });

        const saveEmployee = await employee.save();
        res.status(200).json({ message: "Congratulation Employee data Added successful", data: saveEmployee });

    } catch (error) {
        if (error.code===11000) {
            console.log('Employee Id must be unique')
        } else {
            console.log("Error saving employee Data",error.message)
        }
        res.status(404).json({ message: 'Failed to add employee Data', error });
    }
};

const addManager = async (req, res) => {
    try {
        const{
            name,
            ManagerId,
            email,
            department,
            mobileNo,
            location,
            password
        }=req.body

        const manager = new Manager({
            name,
            ManagerId,
            email,
            department,
            mobileNo,
            location,
            password
        });

        const saveManager = await manager.save();
        res.status(200).json({ message: "manager data successful", data: saveManager });


    } catch (error) {
        if (error.code===11000) {
            console.log('Manager Id must be unique')
        } else {
            console.log("Error saving Manager Data",error.message)
        }
        res.status(404).json({ message: 'Failed to add Manager Data', error });
    }
};

module.exports = {
    addEmployee,
    addManager,
};
