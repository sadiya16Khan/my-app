import React,{useState,useEffect} from "react";
import {Button} from "@mui/material";

type prodType={
    id:number
    category:any
}

export const FetchData=()=>{
    const[prod,setProd]=useState({})   
    
    const fetchData=async()=>{
    const result=await fetch('https://fakestoreapi.com/products/1')
    const data= await result.json()
    
    console.log("===>", data)
    setProd(data);
    } 

    
    useEffect(()=>{
        fetchData()
    },[])
    
    
    console.log("prod",prod)
    return(

        <div>
            <h1>Fething Api Data using Typescript</h1>
            <Button variant="contained" color="warning" onClick={fetchData}>Show Data</Button>

            {Object.entries (prod).length>0&&Object.entries(prod).map((item:any)=>{
                console.log(item)
                return(
                    <div>

                        <h1>{item.id}</h1>
                    </div>
                )
            })}
        </div>
    )
}