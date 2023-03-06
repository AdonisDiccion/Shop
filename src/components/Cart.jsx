import { Box, Button } from "@mui/material";
import React from "react";
import { useCart } from "react-use-cart";
import { AiOutlinePlusSquare, AiOutlineMinusSquare } from "react-icons/ai";
const Cart = () => {
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
    <section>
      <div>
        <div>
          <h5>
            Cart({totalUniqueItems}) total Items:({totalItems})
          </h5>
          <table className="table table-light table-hover m-0">
            <tbody>
              {items.map((item, index) => (
                <tr key={index}>
                  <td>
                    <img src={item.img} alt="" style={{ height: "6rem" }} />
                  </td>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td>Quantity ({item.quantity})</td>
                  <td>
                    <Box display="flex" className="px-10">
                      <Box className="flex items-center flex-1">
                        <AiOutlineMinusSquare
                          fontSize={32}
                          className="cursor-pointer"
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity - 1)
                          }
                        />
                        <AiOutlinePlusSquare
                          fontSize={32}
                          className="cursor-pointer"
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity + 1)
                          }
                        />
                      </Box>

                      <Button
                        variant="contained"
                        color="error"
                        className="flex-1"
                        onClick={() => removeItem(item.id)}
                      >
                        Remove
                      </Button>
                    </Box>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Box>
            <h2>Total Price: php{cartTotal}</h2>
        </Box>
        <Box>
            <Button variant="contained" color="error" onClick={() => emptyCart()}>Clear Cart</Button>
            <Button variant="outlined" color="primary">View Cart</Button>
        </Box>
      </div>
    </section>
  );
};

export default Cart;
