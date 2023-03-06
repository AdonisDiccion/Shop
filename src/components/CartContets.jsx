import React, { useState } from "react";
import { Box, Typography, Drawer, Button, Grid } from "@mui/material";
import { AiOutlineCloseSquare, AiFillCloseSquare } from "react-icons/ai";
import { useCart } from "react-use-cart";
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from "react-icons/ai";
import Navbar2 from "./Navbar2";

const CartContets = () => {

    const {
        isEmpty,
        items,
        totalItems,
        totalUniqueItems,
        cartTotal,
        updateItemQuantity,
        emptyCart,
        removeItem,
      } = useCart();

      if (isEmpty) return <h1 className="text-center"> Your Cart Is Empty</h1>;
      
  return (
    <div>
        <Box className="flex justify-between mx-2 mb-4">
          <h1 className="text-violet-300">My cart</h1>
          <h5>
            Cart({totalUniqueItems}) total Items:({totalItems})
          </h5>
        </Box>
        {items.map((item, index) => (
          <Grid container key={index} gap={3.5} alignItems="center">
            <Grid item>
              <img src={item.img} alt={item.title} style={{ height: "6rem" }} />
            </Grid>

            <Grid item>
              <div className="flex flex-col items-center">
                <span className="font-semibold">ITEM</span>
                <span className="text-sm">{item.title}</span>
              </div>
            </Grid>

            <Grid item>
              <div className="flex flex-col items-center">
                <span className="font-semibold">Price</span>
                <span className="text-sm">₱{item.price}</span>
              </div>
            </Grid>

            <Grid item>
              <div className="flex flex-col items-center">
                <span className="font-semibold">Quantity</span>
                <span className="text-sm">({item.quantity})</span>
              </div>
            </Grid>

            <Grid item>
              <div className="flex items-center gap-2">
                <div>
                  <AiOutlineMinusSquare
                    fontSize={20}
                    onClick={() =>
                      updateItemQuantity(item.id, item.quantity - 1)
                    }
                  />
                  <AiOutlinePlusSquare
                    fontSize={20}
                    onClick={() =>
                      updateItemQuantity(item.id, item.quantity + 1)
                    }
                  />
                </div>
                <div>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => removeItem(item.id)}
                    size='small'
                  >
                    remove
                  </Button>
                </div>
              </div>
            </Grid>
          </Grid>
        ))}

        <div className="flex justify-between items-center mt-4">
          <h2 className="font-semibold">Total Price: ₱{cartTotal}</h2>
        
          <Button variant="contained" color="error" onClick={() => emptyCart()}>
            Clear Cart
          </Button>
        </div>

        <div className="flex mx-auto w-full bg-sky-300 mt-4">
          <Button className="mx-auto font-bold text-white">
            View Cart
          </Button>
        </div>
    </div>
  )
}

export default CartContets