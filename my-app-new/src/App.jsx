import React, { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState("");

  const products = [
    { id: 1, name: "Samsung 24", price: 89000 },
    { id: 2, name: "Iphone 15", price: 79000 },
    { id: 3, name: "Oneplus 12", price: 30000 },
    { id: 4, name: "Iphone 17", price: 99200 },
    { id: 5, name: "Nokia 452", price: 5000 }
  ];

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  function searchProduct() {
    let result = products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );

    if (sortOrder === "low") {
      result.sort((a, b) => a.price - b.price);
    } 
    else if (sortOrder === "high") {
      result.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(result);
  }

  return (
    <>
      <input type="text" placeholder="Search" value={search} onChange={handleSearch}/>

      <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
        <option value="">Default</option>
        <option value="low">Price: low to high</option>
        <option value="high">Price: high to low</option>
      </select>

      <button onClick={searchProduct}>Search</button>

      <ol>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <p>{product.name}</p>
            <p>₹{product.price}</p>
          </li>
        ))}
      </ol>
    </>
  );
}

export default App;