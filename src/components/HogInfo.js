import React from "react";

function HogInfo({hog}){
  return(
    <div id={hog.name}><br/><br/><br/>
      <h3>Greased:  {hog.greased ? "YES!" : "No :("}</h3>
      <h5>Hogs specialty: {hog.specialty} | Hog weight:{hog.weight}</h5>
      <p>Highest Medal Achieved:<br/><em>{hog["highest medal achieved"]}</em></p>
  </div>
  )
}

export default HogInfo