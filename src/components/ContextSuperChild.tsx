import React,{useContext} from "react";
import {GlobalInfo} from "./Parent"



function ContextSuperChild(){
  const {FontColor,getDay}=useContext(GlobalInfo)
  const day="Sunday"
  

    return(
        <div>
          <h1 style={{color:FontColor}}>Super Child</h1>
          <button onClick={()=>getDay(day)}>Click Me</button>
        </div>
    )
};

export default ContextSuperChild;