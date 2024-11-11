import React from "react";
import CustomButton from "../../atoms/button/CustomButton";

const ItemCard = ({
  item,
  quantity,
  onIncrease,
  onDecrease,
  onAdd,
  isInCart,
}) => {
  return (
    <div
      key={item.id}
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px",
        border: "1px solid #ddd",
        borderRadius: "5px",
      }}
    >
      <div>
        <h2>{item.name}</h2>
        <p>Price: {item.price}</p>
        {isInCart(item) && <p>Quantity: {quantity}</p>}
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        {!isInCart(item) ? (
          <CustomButton
            onClick={onAdd}
            colorScheme="blue"
            name="Add to Cart"
            size="md"
            type="button"
          />
        ) : (
          <>
            <CustomButton
              onClick={onDecrease}
              colorScheme="red"
              name="-"
              size="md"
              type="button"
            />
            <span style={{ margin: "0 10px" }}>{quantity}</span>
            <CustomButton
              onClick={onIncrease}
              colorScheme="green"
              name="+"
              size="md"
              type="button"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default ItemCard;
