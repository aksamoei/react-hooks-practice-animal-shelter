import React from "react";

import Pet from "./Pet";

function PetBrowser({pets, onAdoptPet}) {

function handlePetAdopt(petId){
  onAdoptPet(petId)
}

  const displayPets = pets.map((pet)=>{
    return <Pet onAdoptPet={handlePetAdopt} key={pet.id} age={pet.age} weight={pet.weight} name={pet.name} isAdopted={pet.isAdopted} type={pet.type}
      gender={pet.gender} id = {pet.id}
    />
  })
  return (<div className="ui cards">{displayPets}</div>);
}

export default PetBrowser;