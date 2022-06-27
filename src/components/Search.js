import React from "react";

function Search({handleNameChange, name, handleWeightChange, weight}){
  return(
    <form>
      <input 
      value={name}
      onChange={e => handleNameChange(e)} 
      placeholder="Name..."
      />
      <br/>
      <br/>
      <input 
      value={weight}
      onChange={e => handleWeightChange(e)} 
      placeholder="Weight..."
      />
      <br/>
      <br/>
    </form>
  )
}

export default Search