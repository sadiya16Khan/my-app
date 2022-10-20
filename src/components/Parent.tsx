import React,{createContext,useState} from "react";
import ContextChild from "./ContextChild";
import ContextChild10 from "./ContextChild10";



export const GlobalInfo=createContext<string | null>(null);
interface GlobalInfoProviderProps{
  children:React.ReactNode
    }

function Parent({children}: GlobalInfoProviderProps) {
   const[color,setColor]=useState<string>("Red");
   const[day,setDay]=useState<string>("Monday")
     const getDay=(item:string)=>{
      console.log(item)
      setDay(item)
     }
      
     
     return (
    <GlobalInfo.Provider value={{FontColor:color,getDay}}>  
    <div className="App">
      {children}
   <h1>Parent Component {day}</h1>
    <ContextChild/>
    <ContextChild10/>
    </div>
    </GlobalInfo.Provider>
    

  );
}

export default Parent;
