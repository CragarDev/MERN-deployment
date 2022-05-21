const express = require("express"); // importing express
const app = express(); // creating an express app
const port = 8000; // setting the port
const cors = require("cors"); // importing cors - CORS: cross origin resource sharing

// need these to handle the requests
// make sure these lines are above any app.get or app.post code blocks
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors()); // allows us to use cors to share resources from backend to frontend

//  importing the config file
require("./server/config/mongoose.config");

// importing the routes
//? ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//? :::::: ROUTES GO HERE ---------------
//? ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//
// importing the routes
const petRoutes = require("./server/routes/pet.routes");
petRoutes(app);

//
//? ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

//
//
//
//

//@ ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//@ :::::: These lines must be at the bottom of the file ---------------
//@ ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

app.listen(port, () => console.log(`Craig, the server is all fired up and running on port ${port}`));
