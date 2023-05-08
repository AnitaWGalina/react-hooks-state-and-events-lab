import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

 const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`App ${isDarkMode ? 'dark' : 'light'}`}>
      <header>
        <h1>Grocery List</h1>
        <button onClick={handleDarkModeToggle}>Toggle Dark Mode</button>
      </header>
      <main>
        <ItemList />
      </main>
    </div>
  );
}

 

export default App;
