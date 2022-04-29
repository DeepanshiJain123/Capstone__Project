const express = require('express')
const { getOrganizations, createOrganization } = require('../controllers/organizationsController')

const router = express.Router()

router.route("/")
    .get(getOrganizations)
    .post(createOrganization)


module.exports = router