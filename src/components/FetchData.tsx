import React,{useState} from "react";
import {Button} from "@mui/material";

interface prodType{
    category:string
}

export const FetchData=()=>{
    const[prod,setProd]=useState<prodType[]>([])   
    
    const fetchData=async()=>{
    const result=await fetch('https://fakestoreapi.com/products/1')
    // console.log("===>",await result.json())
    const data= await result.json()
    setProd(data);
    }
    
    
    
    
    
    return(

        <div>
            <h1>Fething Api Data using Typescript</h1>
            <Button variant="contained" color="warning" onClick={fetchData}>Show Data</Button>

            {prod.map((item)=>{
                return(
                    <div>
                        <h1>{item.category}</h1>
                    </div>
                )
            })}
        </div>
    )
}