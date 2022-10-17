import React, { useState } from "react";
import { TextField,Grid,Button } from "@mui/material";



export const TodoState = () => {
  const[todo, setTodo]=useState("")
  const[todoList,setTodoList]=useState<string[]>([])
  
  const handleAdd=()=>{
    setTodoList([...todoList,todo]) 
    setTodo("")
  }

  const handleChange=(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{  //types around event...can be identified by hovering on event//
    setTodo(e.target.value)
  }

  return (
     <div>
      <h1>Todo List</h1>
      <Grid container spacing={3}>
        <Grid item xs={12}>
        <TextField
        value={todo}
        // onChange={(e)=>setTodo(e.target.value)} 
        onChange={(e)=>handleChange(e)}
        variant="outlined" 
        label="Enter Text"/>
        <br /><br />
        <Button 
        onClick={handleAdd}
        variant="contained" 
        color="primary">
          Add
        </Button>
        
        {todoList.map((item)=>{
          return(
            <Grid item xs={6}> 
             <h1>{item}</h1>
            </Grid>
          )
        })}
       

        </Grid>

      </Grid>
    </div>
  );
};
