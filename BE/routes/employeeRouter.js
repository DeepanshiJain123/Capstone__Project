const express = require('express')
const { getAllEmployees, createEmployeee, updateEmployeee, deleteEmployeee, getOneEmployee,checkID } = require('../controllers/employeesController')

const router = express.Router()

router.param('id', checkID);

router.route("/")
    .get(getAllEmployees)
    .post(createEmployeee)



router.route("/:id")
     .patch(updateEmployeee)
     .delete(deleteEmployeee)
     .get(getOneEmployee)

module.exports = router