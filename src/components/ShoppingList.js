import React from "react";
import Item from "./Item";


const ShoppingList = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cartItems, setCartItems] = useState([]);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleAddToCart = (id) => {
    const updatedCartItems = [...cartItems, id];
    setCartItems(updatedCartItems);
  };

  const handleRemoveFromCart = (id) => {
    const updatedCartItems = cartItems.filter((itemId) => itemId !== id);
    setCartItems(updatedCartItems);
  };

  const items = [
    { id: 1, name: 'Apples', category: 'fruits' },
    { id: 2, name: 'Bananas', category: 'fruits' },
    { id: 3, name: 'Carrots', category: 'vegetables' },
    { id: 4, name: 'Lettuce', category: 'vegetables' },
  ];

  const filteredItems = selectedCategory === 'all'
    ? items
    : items.filter((item) => item.category === selectedCategory);
}
function ShoppingList({ items }) {
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {items.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
