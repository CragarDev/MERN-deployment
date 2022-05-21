import "./bootstrap.css";
import "./App.css";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Nav from "./components/Nav";
import Button from "./components/Button";
import PetsList from "./components/PetsList";
import { useState } from "react";
import PetDetails from "./components/PetDetails";
import EditPet from "./components/EditPet";
import NewPet from "./components/NewPet";

function App() {
  const [newPetToggle, setNewPetToggle] = useState(false);
  return (
    <>
      <BrowserRouter>
        <div className="App container">
          <h1 className="p-3 text-primary">Pet Shelter</h1>
          <Nav />
          <hr />
          <Switch>
            {/* Dashboard/home Pet Listings Page */}
            <Route exact path="/">
              <PetsList newPetToggle={newPetToggle}></PetsList>
            </Route>
            {/* Create New Page */}
            <Route exact path="/pets/new">
              <NewPet newPetToggle={newPetToggle} setNewPetToggle={setNewPetToggle} />
            </Route>
            {/* Pet Details Page */}
            <Route exact path="/pets/:_id">
              <PetDetails />
            </Route>
            {/* Edit Pet Page */}
            <Route exact path="/pets/:_id/edit">
              <EditPet />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
