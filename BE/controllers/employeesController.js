const { Employee } = require("../models/employeeModel")

const checkID = (req, res, next, val) => {
  console.log(`Employee id is: ${val}`);
  next();
};

const getAllEmployee = async (req, res) => {

    const allEmployee = await Employee.find()

    res.send(allEmployee)
} 

const createEmployee = async (req, res) => {

      const newEmployee = await Employee.create(req.body)

      res.send(newEmployee)
} 

const getOneEmployee = async (req, res) => {
  const oneEmployee = await Employee.findById(req.params.id)
  res.send(oneEmployee)
}

const updateOneEmployee = async (req, res) => {
  const updateEmployee = await Employee.findByIdAndUpdate(req.params.id, req.body)
  res.send(updateEmployee)
}

const deleteOneEmployee = async (req, res) => {
  const deleteEmployee = await Employee.findByIdAndDelete(req.params.id, req.body)
  res.send(deleteEmployee)
}


module.exports = {
    getAllEmployee,
    createEmployee,
    getOneEmployee,
    updateOneEmployee,
    deleteOneEmployee,
    checkID
}