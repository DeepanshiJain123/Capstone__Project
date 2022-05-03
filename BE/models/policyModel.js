const mongoose = require('mongoose')

const policySchema = mongoose.Schema({
    PolicyName: {
        type: String
    },
    IncomeRange: {
        type: Number
    },
    Residance: {
        type: String
    },
    Dependants: {
        type: String
    },
    Age: {
        type: Number
    },
    Premium: {
        type: Number
    },
    Description: {
        type: String
    }
})

const Policy = mongoose.model('Policy', policySchema)

module.exports = { Policy }