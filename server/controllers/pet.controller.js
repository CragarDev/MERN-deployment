// import the product controller
const Pet = require("../models/pet.model");

// testing the connection with sayHello
module.exports.sayHello = (req, res) => {
  let name = "Cragar";
  res.json({
    msg: `Hi ${name}, this is coming from the controller file in the project: 'pets'`
  });
};

//
//t- :::::::::::::::::::::::::::::::::::::::::::::::::::::::
//t- ::::::::::::::: NEW Pet  (CREATE)  --------------------------------
//t- :::::::::::::::::::::::::::::::::::::::::::::::::::::::
//
// create a new Pet
module.exports.createPet = (req, res) => {
  Pet.create(req.body)
    .then((newlyCreatedPet) => res.json({ results: newlyCreatedPet }))
    .catch((err) => res.json({ message: "CREATING Pet: Something went wrong", error: err }));
};

//
//* :::::::::::::::::::::::::::::::::::::::::::::::::::::::
//* ::::::::::::::: GET ALL Pets (READ)  ---------------------
//* :::::::::::::::::::::::::::::::::::::::::::::::::::::::
//
// get all Pets
module.exports.getAllPets = (req, res) => {
  Pet.find()
    .then((allPets) => res.json({ results: allPets }))
    .catch((err) => res.json({ message: "FIND ALL Pets: Something went wrong", error: err }));
};

//
//* :::::::::::::::::::::::::::::::::::::::::::::::::::::::
//* ::::::::::::::: GET ALL Pets SortedAsc (READ)  ---------------------
//* :::::::::::::::::::::::::::::::::::::::::::::::::::::::
//
// get all Pets sorted by type ascending
module.exports.getAllPetsSortedAsc = (req, res) => {
  Pet.find()
    .sort({ type: 1 })
    .then((allPets) => res.json({ results: allPets }))
    .catch((err) => res.json({ message: "FIND ALL Pets: Something went wrong", error: err }));
};

//
//* :::::::::::::::::::::::::::::::::::::::::::::::::::::::
//* ::::::::::::::: GET ALL Pets SortedDesc (READ)  ---------------------
//* :::::::::::::::::::::::::::::::::::::::::::::::::::::::
//
// get all Pets sorted by type descending
module.exports.getAllPetsSortedDesc = (req, res) => {
  Pet.find()
    .sort({ type: -1 })
    .then((allPets) => res.json({ results: allPets }))
    .catch((err) => res.json({ message: "FIND ALL Pets: Something went wrong", error: err }));
};

//
//* :::::::::::::::::::::::::::::::::::::::::::::::::::::::
//* ::::::::::::::: GET ONE Pet (READ)  ---------------------
//* :::::::::::::::::::::::::::::::::::::::::::::::::::::::
//
// get one Pet
module.exports.getOnePet = (req, res) => {
  Pet.findOne({ _id: req.params._id })
    .then((onePet) => res.json({ results: onePet }))
    .catch((err) => res.json({ message: "FIND ONE Pet: Something went wrong", error: err }));
};

//
//* :::::::::::::::::::::::::::::::::::::::::::::::::::::::
//* ::::::::::::::: GET COUNT OF Pets (READ)  ---------------------
//* :::::::::::::::::::::::::::::::::::::::::::::::::::::::
//
// get count of Pets
module.exports.getCountOfPets = (req, res) => {
  Pet.countDocuments({})
    .then((count) => res.json({ results: count }))
    .catch((err) => res.json({ message: "COUNT OF Pets: Something went wrong", error: err }));
};

//
//* :::::::::::::::::::::::::::::::::::::::::::::::::::::::
//* ::::::::::::::: GET ONE RANDOM Pet (READ)  ---------------------
//* :::::::::::::::::::::::::::::::::::::::::::::::::::::::
//
// get random Pet
module.exports.getOneRandomPet = (req, res) => {
  Pet.countDocuments({})
    .then((count) => {
      let random = Math.floor(Math.random() * count);
      Pet.findOne()
        .skip(random)
        .then((randomPet) => res.json({ results: randomPet }))
        .catch((err) => res.json({ message: "RANDOM Pet: Something went wrong", error: err }));
    })
    .catch((err) => res.json({ message: "COUNT OF Pets IN RANDOM: Something went wrong", error: err }));
};
//
// version 2 for the random Pet
//* :::::::::::::::::::::::::::::::::::::::::::::::::::::::
//* ::::::::::::::: GET ONE RANDOM Pet - v2 -  (READ)  ---------------------
//* :::::::::::::::::::::::::::::::::::::::::::::::::::::::
//
// get random Pet
module.exports.getOneRandomPet2 = (req, res) => {
  Pet.find()
    .then((allPets) => {
      // get a random number from index 0 up to but not including the allPets.length
      let randomIdx = Math.floor(Math.random() * allPets.length);
      // return the Pet at the random index
      res.json({ results: allPets[randomIdx] });
    })
    .catch((err) => res.json({ message: "RANDOM Pet V2: Something went wrong", error: err }));
};

//
//n- :::::::::::::::::::::::::::::::::::::::::::::::::::::::
//n- ::::::::::::::: UPDATE ONE Pet (UPDATE) ---------------------
//n- :::::::::::::::::::::::::::::::::::::::::::::::::::::::
//
// update a Pet
module.exports.updateExistingPet = (req, res) => {
  Pet.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
    .then((updatedPet) => res.json({ results: updatedPet }))
    .catch((err) => res.json({ message: "UPDATING Pet: Something went wrong", error: err }));
};

//
//! :::::::::::::::::::::::::::::::::::::::::::::::::::::::
//! ::::::::::::::: DELETE Pet (DELETE) -----------------------------
//! :::::::::::::::::::::::::::::::::::::::::::::::::::::::
//
// delete a Pet
module.exports.deletePet = (req, res) => {
  Pet.deleteOne({ _id: req.params.id })
    .then((result) => res.json({ results: result }))
    .catch((err) => res.json({ message: "DELETING Pet: Something went wrong", error: err }));
};
