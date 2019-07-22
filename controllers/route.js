//Step 1 import express

const express = require("express");

//Step 2
//Import the api files from the models

const routeApi = require("../models/route.js");

//Step 3
//Create a new router.

const routeRouter = express.Router();

//Step 4
//Put all request handlers here
routeRouter.get("/", (req, res) => {
  routeApi
    .getAllRoutes()
    .then(routes => {
      res.json(routes);
    })
    .catch(err => {
      console.log(err);
    });
});

routeRouter.get("/:routeId", (req, res) => {
  routeApi
    .getRoute(req.params.routeId)
    .then(route => {
      res.json(route);
    })
    .catch(err => {
      console.log(err);
    });
});

routeRouter.post("/", (req, res) => {
  routeApi.addNewRoute(req.body).then(neighborhood => {
    res.json(route);
  });
});

//Step 5
//Export the router from the file.

module.exports = {
  routeRouter
};
