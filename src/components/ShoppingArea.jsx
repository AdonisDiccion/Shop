import { Box, Grid } from "@mui/material";
import React from "react";
import Card from "./Card";
import { Datas } from "../bikedata/BikeFile";
import Cart from "./Cart";

const ShoppingArea = () => {
  return (
    <Box justifyContent="center" textAlign="center" className="mt-32">
      <Grid container spacing={1} mx="auto">
        {Datas.giantData.map((item, index) => (
          <Grid item md={3}>
            <Card
              img={item.img}
              title={item.title}
              desc={item.desc}
              price={item.price}
              item={item}
              key={index}
            />
          </Grid>
        ))}
      </Grid>

      <Box>
      </Box>
    </Box>
  );
};

export default ShoppingArea;
