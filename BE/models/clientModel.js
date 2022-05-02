const mongoose = require('mongoose')

const clientSchema = mongoose.Schema({
    name: {
        type: String
    },
    logo: {
        type: String
    },
    clients: [
        { type: mongoose.Schema.ObjectId }
    ]

})

const Client = mongoose.model('Organizaiton', clientSchema)

module.exports = { Client }