const { Policy } = require("../models/policyModel")

const checkID = (req, res, next, val) => {
  console.log(`Policy id is: ${val}`);
  next();
};

const getPolicies = async (req, res) => {

  const allPolicies = await Policy.find()

  res.send(allPolicies)
}

const getOnePolicy = async (req, res) => {

  const OnePolicy = await Policy.findById(req.params.id)

  res.send(OnePolicy)
}

const createPolicy = async (req, res) => {

  const newPolicy = await Policy.create(req.body)

  res.send(newPolicy)
}

const updatePolicy = async (req, res) => {

  const updatePolicy = await Policy.findByIdAndUpdate(req.params.id, req.body)

  res.send(updatePolicy)
}



const deletePolicy = async (req, res) => {

  const deletePolicy = await Policy.findByIdAndDelete(req.params.id, req.body)

  res.send(deletePolicy)
}



module.exports = {
  checkID,
  getPolicies,
  createPolicy,
  updatePolicy,
  getOnePolicy,
  deletePolicy
}