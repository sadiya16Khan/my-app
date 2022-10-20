import React,{useContext} from "react";
import {GlobalInfo} from "./Parent"
import ContextSuperChild from "./ContextSuperChild";



function ContextChild(){
  const {FontColor}=useContext(GlobalInfo)
  console.log("FontColor",FontColor)


    return(
        <div>
          
            <h1 style={{color:FontColor}}>Child</h1>
            <ContextSuperChild/>
        </div>
    )
};

export default ContextChild;