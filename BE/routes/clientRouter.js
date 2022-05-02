const express = require('express')
const { getClient, createClient } = require('../controllers/clientsController')

const router = express.Router()

router.route("/")
    .get(getClient)
    .post(createClient)


module.exports = router