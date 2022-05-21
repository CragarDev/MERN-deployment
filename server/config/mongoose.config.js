// import mongoose
const mongoose = require("mongoose");

// the name of the database
// put these in a .env file eventually
const db_name = "pets_db";
const userName = "Craig";
const db_pwd = "1234567890Cb";
const db_login = "cragardev";

// mongoose connection here
mongoose
  .connect(`mongodb+srv://${db_login}:${db_pwd}@dojo-mean-may.ckqcp.mongodb.net/${db_name}?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log(`Ok ${userName}, Now we have established a connection to the database - ${db_name}`))
  .catch((err) => console.log(`Uh-ooh, ${userName}, Something has gone wrong when connecting to the database: ${db_name}, you had better check on it. look here: `, err));
