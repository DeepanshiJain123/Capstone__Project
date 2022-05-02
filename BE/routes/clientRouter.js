const express = require('express')
const { getClients, createClient } = require('../controllers/clientsController')

const router = express.Router()

router.route("/")
    .get(getClients)
    .post(createClient)


module.exports = router