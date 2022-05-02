const express = require('express')
const { getEmployee, createEmployee } = require('../controllers/employeeController')

const router = express.Router()

router.route("/")
    .get(getEmployee)
    .post(createEmployee)


module.exports = router