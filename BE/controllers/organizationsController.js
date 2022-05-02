const { Organization } = require("../models/organizationModel")

const getOrganizations = async (req, res) => {

  // database me se get all the organizations & return back in json
    const allOrganizations = await Organization.find()
  
    res.send(allOrganizations)
} 

const getOneOrganization = async (req, res) => {

  const OneOrganization = await Organization.findById(req.params.id)
  
    res.send(OneOrganization)
} 

const createOrganization = async (req, res) => {

      const newOrganization = await Organization.create(req.body)
    
      res.send(newOrganization)
} 

const updateOrganization = async (req, res) => {

  const updateOrganization = await Organization.findByIdAndUpdate(req.user.id, req.body)

  res.send(updateOrganization)
}


module.exports = {
    getOrganizations,
    createOrganization,
    updateOrganization,
    getOneOrganization
}