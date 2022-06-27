import React from "react";
import GreaseBar from "./GreaseBar";
import HogCard from "./HogCard";


function HogList({hogs, greased, handleSetGrease}){


  return (
    <div>
      <GreaseBar greased={greased} handleSetGrease={handleSetGrease}/>
      <br/>
      {hogs.map(hog => {
        return(<HogCard key={hog.name} hog={hog}/>)
      })}
    </div>
  )
}

export default HogList