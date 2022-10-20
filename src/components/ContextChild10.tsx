import React,{useContext} from "react";
import {GlobalInfo} from "./Parent"



function ContextChild10(){
  const {FontColor}=useContext(GlobalInfo)
  


    return(
        <div>
          
            <h1 style={{color:FontColor}}> Child NO.10</h1>
        </div>
    )
};

export default ContextChild10;