const mongoose = require('mongoose')

const employeeSchema = mongoose.Schema({
    name: {
        type: String
    },
    id: {
        type: int
    },
    mobile: {
        type: int
    },
    policyId: {
        type: int
    },
    age: {
        type: int
    },
    salary: {
        type: int
    },
    address: {
        type: String
    },
    company:{
        type: String
    }

})

const Employee = mongoose.model('Employee', employeeSchema)

module.exports = { employeeSchema }




// Employee:
// emp id(int), emp name(char), address(varchar), contact no(int), policy id(int), emp age(int), 
// emp income(int), form(will includes security question),company name