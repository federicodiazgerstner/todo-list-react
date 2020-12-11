import "./App.css";
import Search from "./components/Search";
import Button from "./components/Button";
import List from "./components/List";
import { useState } from "react";

function App() {
  const [itemValue, setItemValue] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(inputValue) {
    setItemValue(inputValue);
  }

  function handleClick() {
    if (itemValue !== "") {
      setItems([...items, itemValue]);
    }
  }

  return (
    <div className="App">
      <Search handleCallback={handleChange} />
      <Button handleCallback={handleClick} />
      <List values={items} />
    </div>
  );
}

export default App;
