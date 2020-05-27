// Dog.js
import React from "react";

function Dog(props) {

  const handlePetDog = () => alert(`You just pet ${props.dog.name}`);
  
  return (
    <button type="button" onClick={handlePetDog}> {props.dog.name}</button>
  )
}

export default Dog;
