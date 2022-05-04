const express = require('express')
const { getAllEmployee, createEmployee, updateOneEmployee, deleteOneEmployee, getOneEmployee,checkID } = require('../controllers/employeesController')

const router = express.Router()

router.param('id', checkID);

router.route("/")
    .get(getAllEmployee)
    .post(createEmployee)



router.route("/:id")
     .patch(updateOneEmployee)
     .delete(deleteOneEmployee)
     .get(getOneEmployee)

module.exports = router