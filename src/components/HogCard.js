import React, { useState } from "react";
import HogInfo from "./HogInfo";

function HogCard({hog}){
  const [info,setInfo] = useState(false) 

  function showHogInfo(){
    setInfo(!info)
  }

  return(
    <div className="ui grid container" onClick={showHogInfo}>
      <img src={hog.image} className="ui eight wide column"/>
      <h2 className="name">{hog.name}</h2>
      {info ? <HogInfo hog={hog}/> : <p><br/><br/><br/><br/><br/><br/>Click To Show More About The Hog</p>}
    </div>
  )
}

export default HogCard