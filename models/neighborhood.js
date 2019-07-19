//Place all functions, classes, and/or DB schemas here for a single 
//model.


//Step 1
//Import mongoose connection

const mongoose = require('./connection.js')

//Step 2
//Create model schema 

const NeighborhoodSchema = new mongoose.Schema({
 name: String
})

//Step 3
//Create collection API

const NeighborhoodCollection = mongoose.model('Neighborhood', NeighborhoodSchema)

//Step 4

function getAllNeighborhoods() {
  return NeighborhoodCollection.find()
}

//Step 5
//Export all functions from this file by adding their names as keys to this
//object

module.exports = {
  getAllNeighborhoods
}
