const express = require('express')
const { getOrganizations, createOrganization, updateOrganization, getOneOrganization,deleteOrganization, checkID } = require('../controllers/organizationsController')

const router = express.Router();
router.param('id', checkID);

router.route("/")
    .get(getOrganizations)
    .post(createOrganization);
    


router
    .route('/:id')
    .get(getOneOrganization)
    .patch(updateOrganization)
    .delete(deleteOrganization);

module.exports = router