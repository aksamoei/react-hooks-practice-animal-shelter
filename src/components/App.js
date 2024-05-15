import React, { useState, useEffect } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });
  const [originalPets, setOriginalPets] = useState([])

  useEffect(()=>{
    fetch("http://localhost:3001/pets")
    .then((re)=>re.json())
    .then((petData)=>{setPets(petData)
      setOriginalPets(petData)
    }
  )}, [])

  function handleFilter(eve){
    setFilters({type: eve})
  }

  // console.log(filters)

  function handleFind(){
    const filteredPets = originalPets.filter((pet)=>{
      if (filters.type.toLowerCase() === "all"){
        return pet;
      }
      else{
      return pet.type === filters.type;
      }
    })
    setPets(filteredPets)
    
  }

  function handleAdopt(id){
    console.log(id)
  }

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onChangeType={handleFilter} onFindPetsClick={handleFind}/>
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={pets} onAdoptPet={handleAdopt}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;