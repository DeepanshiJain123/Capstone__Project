const { Client } = require("../models/clientModel")

const getClient = async (req, res) => {

  // database me se get all the organizations & return back in json
    const allClients = await Client.find()
  
    res.send(allClients)
} 

const createClient = async (req, res) => {

      const newClient = await Client.create(req.body)
    
      res.send(newClient)
} 


module.exports = {
  getClient,
    createClient
}