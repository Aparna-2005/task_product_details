"use client";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

export default function ProductGrid({ search, category, price }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setProducts(data.products);
      setLoading(false);
    }
    fetchData();
  }, []);

  const filtered = products.filter((p) => {
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase());
    const matchCat = category ? p.category === category : true;
    return matchSearch && matchCat;
  });

  if (loading) return <p>Loading...</p>;

  return (
    <div className="row">
      {filtered.length > 0 ? (
        filtered.map((product) => (
          <div className="col-md-4 col-sm-6 mb-4" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
}
