import axios from "axios";
import React, { useState, useEffect } from "react";
import { Grid, Card, CardContent } from "@mui/material";

interface dataType {
  category: string;
  description: string;
  id: number;
  price: number;
  image: string;
}

export const ApiUseEff = () => {
  const [data, setData] = useState<dataType[]>([]);

  const getData = async () => {
    const result = await axios.get("https://fakestoreapi.com/products/1");
    console.log("===>", result.data);
    setData(result.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {/* <h1>Api Data</h1> */}

      {data.map((item)=>{
        return(
            <div>
                <img src={item.image} height="100px" width="100px" />
                <h1>{item.category}</h1>
            </div>
        )
      })}
            </div>
  );
};
