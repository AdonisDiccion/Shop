import React, { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {Box ,Grid, Button} from '@mui/material'

//images
// import { giant } from "../bikedata/BikeFile";

const ProductSection = () => {
 return (
    <>
      Shop
    </>
 )
};

export default ProductSection;


//  // ------------------ ADD and REMOVE ----------------------- //

//  const [addItem, setAddItem] = useState(0);
//  const handleAddItem = () => {
//    setAddItem(addItem + 1);
//  };
//  const handleRemoveItem = () => {
//    if (addItem === 0) {
//      return;
//    }
//    setAddItem(addItem - 1);
//  };
//  return (
//    <div className="h-screen m-5">
//      <div className="flex mt-[58px]">
//        <div className="mx-auto">
//          <span className="text-3xl font-semibold">ROAD BIKES</span>
//        </div>
//      </div>
//      {/* ------------------------------------- GIANT ROADBIKES ----------------------- */}
//      <div className="mx-5 border-b-2">
//        <span className="text-2xl font-semibold">GIANT</span>
//      </div>

//      <Grid
//        container
//        spacing={2}
//        justifyContent="center"
//        alignItems="center"
//        className="text-black pt-[8rem]"
//        data-aos="fade-left" data-aos-duration='1000'
//      >
//        {giant.map((giants, index) => (
//          <Grid item xs={12} md={3} key={index}>
//            <Box className="px-2 py-3 cursor-pointer rounded-3xl bg-gray-100 transition duration-300 ease-in-out hover:scale-105 hover:drop-shadow-2xl mx-auto max-w-2xl drop-shadow-lg">
//              <Box  sx={{ transform: "translateY(-50%)", height: "180px",mb:3 }}>

//                  <img
//                    src={giants.src}
//                    alt="/"
//                    className="w-[26rem] h-[18rem] mx-auto object-contain"
//                  />

//              </Box>
//              <Box sx={{ textAlign: "center" }}>
//                <h3 className="text-center text-4xl font-bold pb-3">
//                  {giants.title}
//                </h3>
//                <span className="text-sm uppercase">{giants.description}</span>
//              </Box>
//              <Box
//                sx={{ display: "flex", justifyContent: "space-between", my: 3 }}
//              >
//                <h2 className="text-md text-orange-500">{giants.price}</h2>
//                <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
//                  <Box onClick={handleRemoveItem}>
//                    <RemoveCircleIcon />
//                  </Box>
//                  <span>{addItem}</span>
//                  <Box onClick={handleAddItem}>
//                    <AddCircleIcon />
//                  </Box>
//                </Box>
//              </Box>
//              <Box sx={{ textAlign: "center" }}>
//                <Button
//                  variant="contained"
//                  color="primary"
//                  size="large"
//                  sx={{ borderRadius: "xl", px: 10, py: 2 }}
//                  onClick={() => handleAddToCart(giant)}
//                >
//                  ADD TO CART <ShoppingCartIcon sx={{ ml: 1 }} />
//                </Button>
//              </Box>
//            </Box>
//          </Grid>
//        ))}
//      </Grid>

//      {/* ----------------------------- END GIANT ROADBIKES ----------------------- */}
//    </div>