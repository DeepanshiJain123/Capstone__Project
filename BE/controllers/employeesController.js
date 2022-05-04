const { Employee } = require("../models/employeeModel")

const checkID = (req, res, next, val) => {
  console.log(`Employee id is: ${val}`);
  next();
}

const getAllEmployees = async (req, res) => {

  // database me se get all the Employeees & return back in json
  const allEmployees = await Employee.find()

  res.send(allEmployees)
}

const getOneEmployee = async (req, res) => {

  const OneEmployeee = await Employeee.findById(req.params.id)
  res.send(OneEmployeee)
}

const createEmployeee = async (req, res) => {

  const newEmployeee = await Employeee.create(req.body)

  res.send(newEmployeee)
}

const updateEmployeee = async (req, res) => {
  
  const updateEmployeee = await Employeee.findByIdAndUpdate(req.params.id, req.body)
  res.send(updateEmployeee)
}



const deleteEmployeee = async (req, res) => {

  const deleteEmployeee = await Employeee.findByIdAndDelete(req.params.id, req.body)

  res.send(deleteEmployeee)
}



module.exports = {
  checkID,
  getAllEmployees,
  createEmployeee,
  updateEmployeee,
  getOneEmployee,
  deleteEmployeee
}