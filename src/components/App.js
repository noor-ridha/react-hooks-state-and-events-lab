import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [appClass, setIsDarkMode] = React.useState(false);
   
  function handleDarkModeClick() {
    setIsDarkMode((appClass) => !appClass);

    }
  

   

  return (
    <div className={appClass ? "App dark" : "App light"}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkModeClick}  >{appClass ? "App dark" : "App light"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;