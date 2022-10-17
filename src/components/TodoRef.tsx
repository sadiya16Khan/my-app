import React,{useRef,useState} from "react";
import {Grid} from "@mui/material";

export const TodoRef=()=>{
    const[todo,setTodo]=useState("")
    const[todoList,setTodoList]=useState<string[]>([]);
  const inputRef=useRef<HTMLInputElement | null>(null);   //here type of input box will be defined as it is given reference//

const handleAdd=()=>{ 
    if(inputRef.current) {
    // const todo = inputRef.current?.value // instead of using if statement we can also use optional chaining(i.e ?)
    const todo = inputRef.current.value
    setTodoList([...todoList,todo])  
    } 
    
}

    return(
        <div>
            <h1>Todo Ref</h1>
            <input
            ref={inputRef}
            placeholder="Enter Text"
            type="text" />

             <button onClick={handleAdd}>Add</button>

             {todoList.map((item)=>{
          return(
            <Grid item xs={6}> 
             <h1>{item}</h1>
            </Grid>
          )
        })}
       
        </div>
    )
}