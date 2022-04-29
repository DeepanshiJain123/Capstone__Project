const mongoose = require('mongoose')

const organizationSchema = mongoose.Schema({
    name: {
        type: String
    },
    location: {
        type: String
    },
    employees: [
        { type: mongoose.Schema.ObjectId }
    ]

})

const Organization = mongoose.model('Organizaiton', organizationSchema)

module.exports = { Organization }