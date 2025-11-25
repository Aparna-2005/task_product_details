"use client";
export default function Filters({ category, setCategory }) {
  const categories = ["beauty", "laptops", "fragrances", "skincare", "groceries"];

  return (
    <div className="d-flex gap-4 mb-4 flex-wrap">
      <select
        className="p-2 border rounded"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">All Categories</option>
        {categories.map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>
    </div>
  );
}
