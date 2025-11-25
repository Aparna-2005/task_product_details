"use client"
import ProductGrid from "./components/ProductGrid";
import SearchBar from "./components/SearchBar";
import Filters from "./components/Filters";
import { useState } from "react";

export default function Gallery() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState([0, 2000]);


  return (
    <div className="container mx-auto">
      <div className="d-flex justify-content-between mb-4">
        <div>
          <h1 className="text-2xl font-bold mb-4">Product Store</h1>
        </div>
        <div>
        <SearchBar search={search} setSearch={setSearch} />
        <Filters category={category} setCategory={setCategory} price={price} setPrice={setPrice} />
        </div>
      </div>
      <ProductGrid search={search} category={category} price={price} />
    </div>
  );
}