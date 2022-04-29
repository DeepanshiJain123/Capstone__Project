const { Organization } = require("../models/organizationModel")

const getOrganizations = async (req, res) => {

  // database me se get all the organizations & return back in json
    const allOrganizations = await Organization.find()
  
    res.send(allOrganizations)
} 

const createOrganization = async (req, res) => {

      const newOrganization = await Organization.create(req.body)
    
      res.send(newOrganization)
} 


module.exports = {
    getOrganizations,
    createOrganization
}