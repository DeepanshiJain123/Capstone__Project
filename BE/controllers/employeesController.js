const { Employee } = require("../models/employeeModel")

const getEmployee = async (req, res) => {

  // database me se get all the organizations & return back in json
    const allEmployee = await Employee.find()
  
    res.send(allEmployee)
} 

const createEmployee = async (req, res) => {

      const newEmployee = await Employee.create(req.body)
    
      res.send(newEmployee)
} 


module.exports = {
    getEmployee,
    createEmployee
}