//Import the mongoose module

const mongoose = require('mongoose');

//Step 1.
//TODO: replace <db-name> with the name of your mongo database. 

const connectionString = process.env.MONGODB_URI || "mongodb://localhost/run-atl-app";


//Step 2
//Open up a connection to the mongo database.
//NOTE: newUrlParser diables a deprecation warning

mongoose.connect(connectionString, { useNewUrlParser: true})
  .then(() => {
    console.log("connected to mongo at: " + connectionString);
  });


//Export the mongoose object.

module.exports = mongoose
