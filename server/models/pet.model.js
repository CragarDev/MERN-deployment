// import mongoose from "mongoose";
const mongoose = require("mongoose");

// create a database/schema for the author
const petSchema = new mongoose.Schema(
  // table/collection in the database
  {
    // these are the rows/columns//document in the table/collection
    name: {
      type: String,
      required: [true, "Pet name is required"],
      minlength: [3, "Pet name must be at least 3 characters"]
    },
    type: {
      type: String,
      required: [true, "Pet type is required"],
      minlength: [3, "Pet type must be at least 3 characters"]
    },
    description: {
      type: String,
      required: [true, "Pet description is required"],
      minlength: [3, "Pet description must be at least 3 characters"]
    },
    skill1: {
      type: String
    },
    skill2: {
      type: String
    },
    skill3: {
      type: String
    }
  },
  // this sets the timestamps for createdAt and updatedAt
  { timestamps: true }
);

// create a model for the product
// this is a class that will be used to create documents
const Pet = mongoose.model("Pet", petSchema);

// export the model
module.exports = Pet;
