import React from "react";

function GreaseBar({handleSetGrease, greased}){
  return(
    <div>
      <button name="true" onClick={(e) => handleSetGrease(e)}>{greased ? "Show All Hogs" : "Only Show Greased Hogs"}</button>
    </div>
  )
}

export default GreaseBar