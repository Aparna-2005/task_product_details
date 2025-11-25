"use client";
import ProductGrid from "./components/ProductGrid";
import SearchBar from "./components/SearchBar";
import Filters from "./components/Filters";
import { useState } from "react";

export default function Gallery() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  return (
    <div className="container mx-auto">
      <div className="d-flex justify-content-between mb-4">
        <h1 className="text-2xl font-bold">Product Store</h1>

        <div className="d-flex gap-3">
          <SearchBar search={search} setSearch={setSearch} />
          <Filters category={category} setCategory={setCategory} />
        </div>
      </div>

      <ProductGrid search={search} category={category} />
    </div>
  );
}
