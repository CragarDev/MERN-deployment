// import controller
const PetControllers = require("../controllers/pet.controller");

// export routes
module.exports = (app) => {
  // put static routes at the top and dynamic routes at the bottom
  // testing connection with sayHello
  app.get("/api/hello", PetControllers.sayHello);
  // getting all the pet
  app.get("/api/pets/", PetControllers.getAllPets);
  // getting all the pets sorted ascending
  app.get("/api/pets/none", PetControllers.getAllPets);
  // getting all the pets sorted ascending
  app.get("/api/pets/sortedAsc", PetControllers.getAllPetsSortedAsc);
  // getting all the pets sorted descending
  app.get("/api/pets/sortedDesc", PetControllers.getAllPetsSortedDesc);
  // // getting pets count
  app.get("/api/pets/count", PetControllers.getCountOfPets);
  // // getting one random pet
  app.get("/api/pets/random", PetControllers.getOneRandomPet);
  // // getting one random pet v2
  app.get("/api/pets/random2", PetControllers.getOneRandomPet2);
  // // getting one pet
  app.post("/api/pets/new", PetControllers.createPet);
  // // updating a pet
  app.get("/api/pets/:_id", PetControllers.getOnePet);
  // // creating a new pet
  app.put("/api/pets/:id/edit", PetControllers.updateExistingPet);
  // // deleting a pet
  app.delete("/api/pets/:id", PetControllers.deletePet);
};
