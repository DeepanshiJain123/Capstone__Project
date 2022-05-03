const express = require('express')
const { getAllClient, createClient, getOneClient, updateClient, deleteClient, checkID } = require('../controllers/clientsController')

const router = express.Router()

router.param('id', checkID);

router.route("/")
    .get(getAllClient)
    .post(createClient);

router.route("/:id")
    .get(getOneClient)
    .patch(updateClient)
    .delete(deleteClient);


module.exports = router