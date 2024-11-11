import React from "react";
import useTodoStore from "../../utils/store";
import ItemCard from "../molecules/cards/ItemCard";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("users"));
  const removeFromCart = useTodoStore((state) => state.removeFromCart);
  const editCartItem = useTodoStore((state) => state.editCartItem);
  const cart = useTodoStore((state) => state.cart);

  const isInCart = (item) => {
    return cart.some((cartItem) => cartItem.id === item.id);
  };

  const getQuantity = (item) => {
    const cartItem = cart.find((cartItem) => cartItem.id === item.id);
    return cartItem ? cartItem.quantity : 0;
  };

  const handleIncreaseQuantity = (item) => {
    const currentQuantity = getQuantity(item);
    editCartItem(item.id, { quantity: currentQuantity + 1 });
  };

  const handleDecreaseQuantity = (item) => {
    const currentQuantity = getQuantity(item);
    if (currentQuantity > 1) {
      editCartItem(item.id, { quantity: currentQuantity - 1 });
    } else {
      removeFromCart(item.id);
    }
  };

  //   userData ? alert("welcome to shop") : navigate("/login");

  return (
    <div>
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {cart.map((item) => (
            <ItemCard
              key={item.id}
              item={item}
              quantity={getQuantity(item)}
              onIncrease={() => handleIncreaseQuantity(item)}
              onDecrease={() => handleDecreaseQuantity(item)}
              isInCart={isInCart}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
