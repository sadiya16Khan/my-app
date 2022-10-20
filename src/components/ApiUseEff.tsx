import axios from "axios";
import React, { useState, useEffect } from "react";
import { Grid, Card, CardContent } from "@mui/material";
import { height } from "@mui/system";


interface dataType {
  name: string;
  description: string;
  id: number;
  price: number;
  imageUrl: string;
}

export const ApiUseEff = () => {
  const [data, setData] = useState<dataType[]>([]);

  const getData = async () => {
    const result = await axios.get("https://api.bricketc.com/bricketc-backend-php/get_all_courses.php");
    console.log("===>", result.data.body);
    setData(result.data.body);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>Api Data</h1>
      <Grid container spacing={2}>
      {data.map((item)=>{
        return(
            <Grid item xs={3}>
             <Card className="CRD" sx={{bgcolor:"ThreeDFace"}}>
              <CardContent>
              <img src={item.imageUrl} height="100px" width="100px" />
                <h1>{item.name}</h1>

              </CardContent>
             </Card>
            </Grid>
                            
        )
      })}

      </Grid>

                  </div>
  );
};
