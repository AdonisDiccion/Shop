import React, { useState } from "react";
import { Box, Typography, Drawer, Button, Grid } from "@mui/material";
import { AiOutlineCloseSquare, AiFillCloseSquare } from "react-icons/ai";
import { useCart } from "react-use-cart";
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from "react-icons/ai";
import Navbar2 from "./Navbar2";

const CartPage = (props) => {
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

  const [showCart, setShowCart] = useState(false);

  const handleShowCart = () => {
      setShowCart(!showCart)
  }

  if (isEmpty) return <h1 className="text-center"> Your Cart Is Empty</h1>;
  return (
    
    
    <Box>
      <Drawer
        open={showCart}
        onClose={() => setShowCart(!showCart)}
        anchor="right"
        PaperProps={{
          sx: { width: 550, background: "white", borderRadius: 0, px:'10px' },
        }}
      >
        
      </Drawer>
    </Box>
  );
};

export default CartPage;
