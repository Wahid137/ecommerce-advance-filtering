import { useState } from "react";
import "./App.css";
import Nav from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";

function App() {
  const [selectedCategory, setSelectedCategory] = useState();

  //input filter
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <>
      <Sidebar />
      <Nav query={query} handleInputChange={handleInputChange} />
      <Recommended />
      <Products />
    </>
  );
}

export default App;
