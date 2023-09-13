import { useState } from "react";
import "./App.css";
import Nav from "./Navigation/Nav";
import Products from "./Products/Products";
import products from "./db/data.jsx";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  //input filter
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

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
