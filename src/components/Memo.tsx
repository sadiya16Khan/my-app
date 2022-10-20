import React ,{useState,useMemo}from "react";

export const Memo=()=>{
const[count,setCount]=useState(0);
const[item,setItem]=useState(10);

// function multiCount(){
//     console.log("multiCount")  //we can check here in console when we click on utem btn then ths function of count is rendering unnecessarily//
//                                //so to avoid this unecessary rendering of items we use useMemo hook//
//     return count*5
// }

const multiCountMemo=useMemo(function multiCount(){
    console.log("multiCount")
    return count*5
},[count])



    return(
        <div>
            <h1>useMemo Hook With TypeScript</h1>
            <h2>Count:{count}</h2>
            <h2>Item:{item}</h2>
            <h2>{multiCountMemo}</h2>
            <button onClick={()=>setCount(count+1)}>Update Count</button>
            <button onClick={()=>setItem(item*10)}>Update Item</button>
        </div>
    )
}