//Step 1 import express

const express = require('express')

//Step 2
//Import the api files from the models

const neighborhoodApi = require('../models/neighborhood')

//Step 3 
//Create a new router.

const neighborhoodRouter = express.Router()

//Step 4
//Put all request handlers here

neighborhoodRouter.get('/', (req, res) => {
  neighborhoodApi
    .getAllNeighborhoods()
      .then(neighborhoods => {
        res.json(neighborhoods)
      })
      .catch(err => {
        console.log(err)
      })
  
})

//Step 6
//Export the router from the file.

module.exports = {
  neighborhoodRouter
}
