import { ShoppingCartOutlined } from "@mui/icons-material";
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid } from "@mui/material";
import React, { useState } from "react";
import { useCart } from "react-use-cart";
import { IoWarning } from 'react-icons/io5'

const Card = (props) => {

    const { addItem } = useCart();

  const [isMouseOver, setIsMouseOver] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleDialogOpen = () => {
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  const handleAddToCart = () => {
    addItem(props.item);
    handleDialogClose();
  };

  const handleMouseOver = () => {
    setIsMouseOver(true);
  };

  const handleMouseOut = () => {
    setIsMouseOver(false);
  };

  return (
    <>
      <div class="p-8 w-96 cursor-pointer rounded-3xl bg-gray-100 transition duration-300 ease-in-out hover:scale-105 hover:drop-shadow-2xl">
        <div class="-mb-20 -translate-y-1/2 transform">
          <img
            src={props.img}
            alt=""
            title="Kobe Bryant"
            class="mx-auto h-64"
          />
        </div>
        <div class="text-center">
          <h3 class="text-center text-4xl font-bold">{props.title}</h3>
        </div>
        <div>
          <p>{props.desc}</p>
        </div>
        <div>
          <span>₱{props.price}</span>
        </div>
        <div class="text-center">
          <Button
            variant={isMouseOver ? "contained" : "outlined"}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            color="primary"
            size="large"
            sx={{ borderRadius: "xl", px: 10 }}
            fullWidth
            onClick={handleDialogOpen}
          >
            Add To Cart
            <ShoppingCartOutlined fontSize="small" sx={{ marginLeft: "3px" }} />
          </Button>
          <Dialog open={isDialogOpen} onClose={handleDialogClose}>
          <DialogTitle>
            <span className="flex items-center justify-between">
              Add To Cart?
              <IoWarning className="text-yellow-300 mr-1" fontSize={32} />   
            </span></DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure you want to add this item to your cart?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDialogClose}>No</Button>
            <Button onClick={handleAddToCart} autoFocus>
              Yes
            </Button>
          </DialogActions>
        </Dialog>
        </div>
      </div>
    </>
  );
};

export default Card;
