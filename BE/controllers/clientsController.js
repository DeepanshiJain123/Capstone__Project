const { Client } = require("../models/clientModel")

const checkID = (req, res, next, val) => {
  console.log(`Client id is: ${val}`);
  next();
};

const getAllClient = async (req, res) => {

  const allClients = await Client.find()

  res.send(allClients)
}

const createClient = async (req, res) => {

  const newClient = await Client.create(req.body)

  res.send(newClient)
}

const getOneClient = async (req, res) => {

  const oneClient = await Client.findById(req.params.id)

  res.send(oneClient)
}

const updateClient = async (req, res) => {

  const updateClient = await Client.findByIdAndUpdate(req.user.id, req.body)

  res.send(updateClient)
}

const deleteClient = async (req, res) => {

  const deleteClient = await Client.findByIdAndDelete(req.user.id, req.body)

  res.send(deleteClient)
}

module.exports = {
  checkID,
  getAllClient,
  createClient,
  getOneClient,
  updateClient,
  deleteClient
}