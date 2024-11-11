import React from "react";
import useTodoStore from "../../utils/store";
import ItemCard from "../molecules/cards/ItemCard";
import { useNavigate } from "react-router-dom";

const Shop = () => {
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("users"));

  const editCartItem = useTodoStore((state) => state.editCartItem);
  const cart = useTodoStore((state) => state.cart);
  const removeFromCart = useTodoStore((state) => state.removeFromCart);

  const items = [
    { id: 1, name: "Apple", price: "$10" },
    { id: 2, name: "Orange", price: "$20" },
    { id: 3, name: "Banana", price: "$30" },
  ];

  const isInCart = (item) => {
    return cart.some((cartItem) => cartItem.id === item.id);
  };

  const getQuantity = (item) => {
    const cartItem = cart.find((cartItem) => cartItem.id === item.id);
    return cartItem ? cartItem.quantity : 0;
  };

  const handleAddToCart = (item) => {
    editCartItem(item.id, { ...item, quantity: 1 });
  };

  // userData ? alert("welcome to shop") : navigate("/login");
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

  return (
    <div>
      <h1>Shop</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {items.map((item) => (
          <ItemCard
            key={item.id}
            item={item}
            quantity={getQuantity(item)}
            onAdd={() => handleAddToCart(item)}
            onIncrease={() => handleIncreaseQuantity(item)}
            onDecrease={() => handleDecreaseQuantity(item)}
            isInCart={isInCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Shop;
