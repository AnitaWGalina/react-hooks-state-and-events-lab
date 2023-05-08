import React from "react";


const Item = ({ item, cartItems, handleAddToCart, handleRemoveFromCart }) => {
  const isInCart = cartItems.includes(item.id);

  const handleCartButtonClick = () => {
    if (isInCart) {
      handleRemoveFromCart(item.id);
    } else {
      handleAddToCart(item.id);
    }
  };
}
function Item ({ name, category }) {
  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add">Add to Cart</button>
    </li>
  );
}

export default Item;
